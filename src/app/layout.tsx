import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import { AnnouncementBar, Footer, Navbar } from "@/components/SiteChrome";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Saakya Consolidated LLC | New York — Global Product Portfolio",
    template: "%s | Saakya Consolidated LLC",
  },
  description:
    "Saakya Consolidated LLC presents a diversified portfolio of tissue & hygiene, food products, Ceylon cinnamon, and coco peat for wholesale and commercial inquiries. Based in New York, USA.",
  openGraph: {
    title: "Saakya Consolidated LLC | New York — Global Product Portfolio",
    description:
      "Wholesale and commercial product inquiries for hygiene, food, Ceylon cinnamon, and coco peat products.",
    type: "website",
    locale: "en_US",
    siteName: "Saakya Consolidated LLC",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=20260116" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png?v=20260116" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/logo3.png?v=20260116" />
      </head>
      <body className={`${dmSans.variable} ${plusJakarta.variable} antialiased`}>
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
