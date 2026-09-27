import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Lora, Manrope } from "next/font/google";
import "./globals.css";

// Headings: plain, sturdy serif. Body and ingredients: highly legible sans. Secondary copy: readable italic.
const display = DM_Serif_Display({ weight: "400", subsets: ["latin", "latin-ext"], variable: "--font-dm-serif", display: "swap" });
const sans = Manrope({ subsets: ["latin", "latin-ext"], variable: "--font-manrope", display: "swap" });
const italic = Lora({ style: "italic", subsets: ["latin", "latin-ext"], variable: "--font-lora", display: "swap" });

export const metadata: Metadata = {
  title: "Donatello Pizza — Her şey bir dilimle başlar",
  description: "Hamurdan ilk dilime. Donatello Pizza'nın sinematik açılış filmi ve menüsü.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
