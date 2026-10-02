import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Lora, Manrope } from "next/font/google";
import { siteUrl } from "./site-data";
import "./globals.css";

// Headings: plain, sturdy serif. Body and ingredients: highly legible sans. Secondary copy: readable italic.
const display = DM_Serif_Display({ weight: "400", subsets: ["latin", "latin-ext"], variable: "--font-dm-serif", display: "swap" });
const sans = Manrope({ subsets: ["latin", "latin-ext"], variable: "--font-manrope", display: "swap" });
const italic = Lora({ style: "italic", subsets: ["latin", "latin-ext"], variable: "--font-lora", display: "swap" });

const description = "Selimpaşa, Silivri'de Donatello Pizza: 19 çeşit pizza, menüler ve gel-al kampanyaları. Menüye göz atın, sepetinizi oluşturup WhatsApp ile sipariş verin. Açık: 10.30–02.00.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Donatello Pizza Selimpaşa — Menü ve Online Sipariş",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: "Donatello Pizza",
    title: "Donatello Pizza Selimpaşa",
    description,
  },
  twitter: { card: "summary_large_image", title: "Donatello Pizza Selimpaşa", description },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }], apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }] },
};

export const viewport: Viewport = {
  themeColor: "#0b1627",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${display.variable} ${sans.variable} ${italic.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
