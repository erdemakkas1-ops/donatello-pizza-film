"use client";

import { useState, type FormEvent } from "react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { business } from "../site-data";
import { useCart, type CartLine } from "./cart";

type Delivery = "Paket servis" | "Gel-al";
type Payment = "Kapıda nakit" | "Kapıda kredi kartı";
type Details = { name: string; phone: string; address: string; note: string; delivery: Delivery; payment: Payment };

const DETAILS_KEY = "donatello-order-details";
const emptyDetails: Details = { name: "", phone: "", address: "", note: "", delivery: "Paket servis", payment: "Kapıda nakit" };
const money = (v: number) => `${v.toLocaleString("tr-TR")} ₺`;
const loadDetails = (): Details => {
  try { return { ...emptyDetails, ...JSON.parse(localStorage.getItem(DETAILS_KEY) || "{}") }; } catch { return emptyDetails; }
};
// The order note belongs to one order; contact details are kept for next time.
const forgetNote = () => {
  try { localStorage.setItem(DETAILS_KEY, JSON.stringify({ ...loadDetails(), note: "" })); } catch {}
};
const lineLabel = (l: CartLine) => `${l.name}${l.variant ? ` (${l.variant})` : ""}`;

// Opening hours 10:30–02:00 (Istanbul). Outside them the order is still sent, with a heads-up.
function isOpenNow() {
  const [h, m] = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Istanbul", hour: "2-digit", minute: "2-digit", hourCycle: "h23" })
    .format(new Date()).split(":").map(Number);
  const minutes = h * 60 + m;
  return minutes >= 10 * 60 + 30 || minutes < 2 * 60;
}

function buildMessage(lines: CartLine[], d: Details, total: number | null) {
  const items = lines.map((l) => `• ${l.qty} × ${lineLabel(l)}${l.price ? ` — ${money(l.price * l.qty)}` : ""}`);
  return [
    "Merhaba, Donatello Pizza'dan sipariş vermek istiyorum.",
    "",
    ...items,
    "",
    total !== null ? `Toplam: ${money(total)}` : "Fiyat: Siparişi onaylarken bildirmenizi rica ederim.",
    `Teslimat: ${d.delivery}`,
    `Ödeme: ${d.payment}`,
    `Ad Soyad: ${d.name.trim()}`,
    `Telefon: ${d.phone.trim()}`,
    ...(d.delivery === "Paket servis" ? [`Adres: ${d.address.trim()}`] : []),
    ...(d.note.trim() ? [`Not: ${d.note.trim()}`] : []),
  ].join("\n");
}

// Mounted only while the sheet is open (client-side), so saved details can seed the initial state.
function CheckoutForm({ onSent }: { onSent: () => void }) {
  const { lines, setQty } = useCart();
  const [details, setDetails] = useState<Details>(loadDetails);
  const [errors, setErrors] = useState<Partial<Record<keyof Details, string>>>({});

  const update = <K extends keyof Details>(key: K, value: Details[K]) => {
    setDetails((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const allPriced = lines.length > 0 && lines.every((l) => typeof l.price === "number");
  const total = allPriced ? lines.reduce((sum, l) => sum + (l.price ?? 0) * l.qty, 0) : null;

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const next: typeof errors = {};
    if (!details.name.trim()) next.name = "Adınızı yazın.";
    if (details.phone.replace(/\D/g, "").length < 10) next.phone = "Geçerli bir telefon numarası yazın.";
    if (details.delivery === "Paket servis" && details.address.trim().length < 10) next.address = "Teslimat adresini açık yazın.";
    setErrors(next);
    if (Object.keys(next).length) {
      document.getElementById(`order-${Object.keys(next)[0]}`)?.focus();
      return;
    }
    try { localStorage.setItem(DETAILS_KEY, JSON.stringify(details)); } catch {}
    const url = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(buildMessage(lines, details, total))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    onSent();
  };

  return (
    <form className="cart-body" onSubmit={submit} noValidate>
      <ul className="cart-lines">
        {lines.map((l) => (
          <li key={l.key}>
            <span className="cart-line-name">{l.name}{l.variant && <small>{l.variant}</small>}</span>
            <span className="cart-qty">
              <button type="button" onClick={() => setQty(l.key, l.qty - 1)} aria-label={`${lineLabel(l)} adedini azalt`}>−</button>
              <output aria-label={`${lineLabel(l)} adedi`}>{l.qty}</output>
              <button type="button" onClick={() => setQty(l.key, l.qty + 1)} aria-label={`${lineLabel(l)} adedini artır`}>+</button>
            </span>
            <span className="cart-line-price">{l.price ? money(l.price * l.qty) : "—"}</span>
          </li>
        ))}
      </ul>
      <p className="cart-total">
        <span>Toplam</span>
        <b>{total !== null ? money(total) : "Onayda bildirilir"}</b>
      </p>

      <fieldset className="cart-choice">
        <legend>Teslimat</legend>
        {(["Paket servis", "Gel-al"] as Delivery[]).map((v) => (
          <label key={v}><input type="radio" name="delivery" checked={details.delivery === v} onChange={() => update("delivery", v)} />{v}</label>
        ))}
      </fieldset>

      <label className="cart-field" htmlFor="order-name">Ad Soyad
        <input id="order-name" autoComplete="name" value={details.name} onChange={(e) => update("name", e.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? "order-name-error" : undefined} />
        {errors.name && <small id="order-name-error">{errors.name}</small>}
      </label>
      <label className="cart-field" htmlFor="order-phone">Telefon
        <input id="order-phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="05xx xxx xx xx" value={details.phone} onChange={(e) => update("phone", e.target.value)} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "order-phone-error" : undefined} />
        {errors.phone && <small id="order-phone-error">{errors.phone}</small>}
      </label>
      {details.delivery === "Paket servis" && (
        <label className="cart-field" htmlFor="order-address">Adres
          <textarea id="order-address" rows={3} autoComplete="street-address" placeholder="Mahalle, sokak, bina ve daire no" value={details.address} onChange={(e) => update("address", e.target.value)} aria-invalid={!!errors.address} aria-describedby={errors.address ? "order-address-error" : undefined} />
          {errors.address && <small id="order-address-error">{errors.address}</small>}
        </label>
      )}

      <fieldset className="cart-choice">
        <legend>Ödeme</legend>
        {(["Kapıda nakit", "Kapıda kredi kartı"] as Payment[]).map((v) => (
          <label key={v}><input type="radio" name="payment" checked={details.payment === v} onChange={() => update("payment", v)} />{v}</label>
        ))}
      </fieldset>

      <label className="cart-field" htmlFor="order-note"><span>Not <em>(isteğe bağlı)</em></span>
        <textarea id="order-note" rows={2} placeholder="Zil çalışmıyor, soğansız vb." value={details.note} onChange={(e) => update("note", e.target.value)} />
      </label>

      {!isOpenNow() && <p className="cart-closed">Şu an kapalıyız (açık: {business.hours}). Siparişiniz açılışta değerlendirilir.</p>}

      <button type="submit" className="cart-submit">WHATSAPP İLE SİPARİŞ VER</button>
    </form>
  );
}

export default function CartSheet() {
  const { lines, count, clear, open, setOpen } = useCart();
  const [sent, setSent] = useState(false);

  return (
    <>
      {count > 0 && (
        <button type="button" className="cart-fab" onClick={() => setOpen(true)} aria-label={`Sepeti aç, ${count} ürün`}>
          <span>SEPET</span><b>{count}</b>
        </button>
      )}
      <Sheet open={open} onOpenChange={(o) => { setOpen(o); if (!o) setSent(false); }}>
        <SheetContent side="right" showCloseButton={false} className="cart-sheet">
          <div className="cart-head">
            <SheetTitle className="cart-title">Sepetiniz</SheetTitle>
            <SheetClose className="cart-close" aria-label="Sepeti kapat">KAPAT ✕</SheetClose>
          </div>
          <SheetDescription className="cart-desc">
            Siparişiniz WhatsApp üzerinden işletmeye iletilir; onay ve fiyat bilgisi oradan gelir.
          </SheetDescription>

          {lines.length === 0 ? (
            <p className="cart-empty">Sepetiniz boş. Menüden ürün ekleyebilirsiniz.</p>
          ) : sent ? (
            <div className="cart-sent">
              <p>WhatsApp&apos;ta hazır mesajınız açıldı. Göndere basmayı unutmayın.</p>
              <p>WhatsApp açılmadıysa bizi <a href={`tel:+9${(business.phone ?? "").replace(/\D/g, "")}`}>{business.phone}</a> numarasından arayabilirsiniz.</p>
              <div className="cart-sent-actions">
                <button type="button" onClick={() => setSent(false)}>SİPARİŞE DÖN</button>
                <button type="button" onClick={() => { clear(); forgetNote(); setSent(false); setOpen(false); }}>SEPETİ TEMİZLE</button>
              </div>
            </div>
          ) : (
            <CheckoutForm onSent={() => setSent(true)} />
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
