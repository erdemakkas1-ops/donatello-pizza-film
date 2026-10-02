import { business, campaigns, pizzaGroups, products, sides, siteUrl, toppingsText } from "../site-data";

export const dynamic = "force-static";

const tl = (v?: number) => (v ? `${v} TL` : "fiyat sorunuz");

// Plain-text summary for AI assistants, built from the same data as the page so prices never drift.
export function GET() {
  const lines = [
    "# Donatello Pizza (Selimpaşa, Silivri)",
    "",
    "> Selimpaşa'da pizza restoranı. Menü, fiyatlar ve kampanyalar bu sitede; siparişler WhatsApp üzerinden alınır.",
    "",
    `- Site: ${siteUrl}`,
    `- Adres: ${business.address}`,
    `- Çalışma saatleri: ${business.hours}`,
    `- Telefon / WhatsApp: ${business.phone}`,
    `- Instagram: https://www.instagram.com/${business.instagram}/`,
    "- Tüm pizzalar pizza sosu ve mozzarella ile hazırlanır. Görseller temsilidir.",
    "",
    "## Pizzalar (Small / Medium / Large)",
    ...pizzaGroups.flatMap((g) => ["", `### ${g.title}`, ...products.filter((p) => p.group === g.id).map((p) => `- ${p.name}: ${toppingsText(p)} — ${tl(p.prices?.s)} / ${tl(p.prices?.m)} / ${tl(p.prices?.l)}`)]),
    "",
    `## ${campaigns.pickup.title} (sadece gel-al, ${campaigns.pickup.until} tarihine kadar)`,
    ...campaigns.pickup.items.map((c) => `- ${c.name}: ${c.contents} — ${tl(c.price)}`),
    "",
    `## ${campaigns.menus.title}`,
    ...campaigns.menus.items.map((c) => `- ${c.name}: ${c.contents} — ${tl(c.price)}`),
    "",
    "## Yan ürünler ve içecekler",
    ...sides.flatMap((g) => ["", `### ${g.title}`, ...g.items.map((i) => `- ${i.name}${g.size ? ` ${g.size}` : ""} — ${tl(i.price)}`)]),
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
