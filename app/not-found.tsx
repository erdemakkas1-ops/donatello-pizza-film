import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Sayfa bulunamadı — Donatello Pizza", robots: { index: false } };

export default function NotFound() {
  return (
    <main className="not-found">
      <Link className="logo" href="/"><img src="/brand/logo.webp" alt="Donatello Pizza" width={398} height={420} /></Link>
      <span className="eyebrow">404</span>
      <h1>BU DİLİM<br /><em>BULUNAMADI.</em></h1>
      <p>Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir. Menümüz ise her zaman yerinde.</p>
      <Link className="not-found-cta" href="/#menu">MENÜYE DÖN ↗</Link>
    </main>
  );
}
