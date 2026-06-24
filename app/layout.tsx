import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { services } from "@/lib/data/services";
import { offices } from "@/lib/data/offices";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Local search targeting: every core service crossed with every city we serve,
// plus the high-intent tender/reliability phrases. Generated from data so it
// stays in sync as services or offices change.
const serviceTerms = [
  "construction",
  "facilities management",
  "industrial cleaning",
  "logistics and transport",
  "sanitation and mobile toilets",
  "safety equipment and PPE",
  "plant and equipment hire",
  "events management",
  "security services",
];
const cities = offices.map((o) => o.city);
const localKeywords = cities.flatMap((city) => [
  ...serviceTerms.map((term) => `${term} ${city}`),
  `trusted tender partner ${city}`,
  `most reliable service provider ${city}`,
]);

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bonram.co.za"),
  title: {
    default: "Bonram (Pty) Ltd | BBBEE Level 1 Multi-Service B2B Company",
    template: "%s | Bonram (Pty) Ltd",
  },
  description:
    "Bonram is a BBBEE Level 1 South African B2B services company delivering building & construction, facilities management, logistics, sanitation, safety solutions, and plant hire across 5 national offices.",
  keywords: [
    "BBBEE Level 1 company South Africa",
    "BBBEE certified contractor",
    "trusted tender partner South Africa",
    "B2B services South Africa",
    "government contractor South Africa",
    "civil engineering and construction",
    "cross-border transport Zimbabwe South Africa",
    "PSIRA registered security services",
    ...localKeywords,
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
  "@type": "LocalBusiness",
  "@id": "https://www.bonram.co.za/#organization",
  name: "Bonram (Pty) Ltd",
  description:
    "BBBEE Level 1 multi-service B2B company delivering building & construction, facilities management, logistics, sanitation, safety solutions, equipment hire, events management, and security services across South Africa.",
  url: "https://www.bonram.co.za",
  logo: "https://www.bonram.co.za/logo/bonram-logo.png",
  telephone: "+27-74-274-8684",
  email: "info@bonram.co.za",
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
  areaServed: [
    { "@type": "AdministrativeArea", name: "Limpopo" },
    { "@type": "AdministrativeArea", name: "Gauteng" },
    { "@type": "AdministrativeArea", name: "Mpumalanga" },
    { "@type": "AdministrativeArea", name: "Eastern Cape" },
    { "@type": "AdministrativeArea", name: "KwaZulu-Natal" },
    { "@type": "Country", name: "South Africa" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Bonram Services",
    itemListElement: services.map((s, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.shortDescription,
          url: `https://www.bonram.co.za/services/${s.slug}`,
        },
      },
    })),
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
