import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bonram.co.za"),
  title: {
    default: "Bonram (Pty) Ltd | BBBEE Level 1 Multi-Service B2B Company",
    template: "%s | Bonram (Pty) Ltd",
  },
  description:
    "Bonram is a BBBEE Level 1 South African B2B services company delivering building & construction, facilities management, logistics, sanitation, safety solutions, and plant hire across 5 national offices.",
  keywords: [
    "BBBEE Level 1 South Africa",
    "B2B services Limpopo",
    "facilities management South Africa",
    "plant hire",
    "construction civil engineering",
    "logistics transport dangerous goods",
    "sanitation mobile toilets",
    "government contractor South Africa",
  ],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: "Bonram (Pty) Ltd",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bonram (Pty) Ltd",
  url: "https://www.bonram.co.za",
  logo: "https://www.bonram.co.za/logo/bonram-logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+27-74-274-8684",
    email: "info@bonram.co.za",
    contactType: "customer service",
    areaServed: "ZA",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "06 Geelhaak Street, Onverwacht",
    addressLocality: "Lephalale",
    addressRegion: "Limpopo",
    postalCode: "0557",
    addressCountry: "ZA",
  },
  sameAs: ["https://www.bonram.co.za"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
