import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://autogear-scout.vercel.app"
  ),
  title: {
    default: "AutoGear Scout | Car Accessories, Reviews & Buying Guides",
    template: "%s | AutoGear Scout",
  },
  description: "Independent automotive accessory buying guides, comparisons, and curated AliExpress finds for safer, cleaner, smarter driving.",
  other: {
    "codex-preview": "development",
  },
  openGraph: { title: "AutoGear Scout", description: "Smarter automotive accessory buying guides and comparisons.", type: "website" },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
