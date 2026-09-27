import type { Metadata } from "next";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
