import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, Phone, CheckCircle, ShieldCheck } from "lucide-react";
import { offices, getOfficeBySlug } from "@/lib/data/offices";
import { services } from "@/lib/data/services";
import SectionHeader from "@/components/ui/SectionHeader";
import FAQ from "@/components/ui/FAQ";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { locationFaqs } from "@/lib/data/faqs";

// Only the known office locations are valid; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return offices.map((o) => ({ location: o.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  const office = getOfficeBySlug(location);
  if (!office) return {};
  const { city, province } = office;
  return {
    title: `Construction, Facilities Management & Plant Hire in ${city}`,
    description: `Bonram is a BBBEE Level 1, tender-ready B2B services partner in ${city}, ${province}. Construction, facilities management, logistics, sanitation, safety, plant hire, events and security — one accredited supplier. Request a quote.`,
    alternates: { canonical: `/${office.slug}` },
    openGraph: {
      title: `Bonram in ${city} | BBBEE Level 1 Multi-Service Partner`,
      description: `Trusted, BBBEE Level 1 construction, facilities and plant-hire partner serving ${city} and ${province}.`,
      url: `https://www.bonram.co.za/${office.slug}`,
    },
  };
}

const trustPoints = [
  "BBBEE Level 1 (100% Black-owned) — maximises your procurement scorecard",
  "Trusted tender partner — CSD-registered, fully accredited, audit-ready",
  "One supplier, eight services — fewer contracts, less admin, faster delivery",
  "Proven with Eskom, ArcelorMittal, EXXARO and government departments",
];

export default async function LocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const office = getOfficeBySlug(location);
  if (!office) notFound();
  const { city, province, address, postalCode } = office;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.bonram.co.za/${office.slug}#localbusiness`,
    name: `Bonram (Pty) Ltd — ${city}`,
    description: `BBBEE Level 1 multi-service B2B company serving ${city}, ${province}: construction, facilities management, logistics, sanitation, safety solutions, plant hire, events and security.`,
    url: `https://www.bonram.co.za/${office.slug}`,
    telephone: "+27-74-274-8684",
    email: "info@bonram.co.za",
    parentOrganization: { "@id": "https://www.bonram.co.za/#organization" },
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressLocality: city,
      addressRegion: province,
      postalCode,
      addressCountry: "ZA",
    },
    areaServed: { "@type": "AdministrativeArea", name: province },
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: `${s.name} in ${city}`,
        url: `https://www.bonram.co.za/services/${s.slug}`,
      },
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.bonram.co.za/" },
          { name: city, url: `https://www.bonram.co.za/${office.slug}` },
        ])}
      />

      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded px-3 py-1.5 mb-6">
            <ShieldCheck size={16} className="text-gold" />
            <span className="text-gold font-bold text-sm">BBBEE Level 1 Certified</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-5">
            Construction, Facilities Management &amp; Plant Hire in {city}
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-3xl mb-8">
            {office.blurb}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-semibold px-8 py-4 rounded hover:bg-gold-light transition-colors text-lg"
            >
              Request a Quote <ArrowRight size={20} />
            </Link>
            <a
              href="tel:+27742748684"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border-2 border-white/30 font-semibold px-8 py-4 rounded hover:bg-white/20 transition-colors text-lg"
            >
              <Phone size={20} /> +27 74 274 8684
            </a>
          </div>
        </div>
      </section>

      {/* Services in {city} */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={`Services in ${city}`}
            heading={`Everything ${city} needs from one accredited supplier`}
            subheading={`Bonram delivers all eight service lines across ${city} and the wider ${province} region.`}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group block border border-border rounded-lg p-6 hover:border-gold hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                  {s.name} in {city}
                </h3>
                <p className="text-slate text-sm leading-relaxed">{s.shortDescription}</p>
                <span className="inline-flex items-center gap-1 text-gold text-sm font-semibold mt-4">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Bonram */}
      <section className="py-20 bg-mist">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Bonram"
            heading={`The most reliable B2B service partner in ${city}`}
            align="left"
          />
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle size={22} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="text-charcoal leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 bg-white border border-border rounded-lg p-6 flex items-start gap-4">
            <MapPin size={22} className="text-gold flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-navy">{office.name}</p>
              <p className="text-slate text-sm">
                {address}, {city} {postalCode}, {province}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={locationFaqs(office)} heading={`Bonram in ${city} — FAQs`} />

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a reliable, BBBEE Level 1 partner in {city}?
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Tell us about your project or tender. We respond within 24 hours with a tailored quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-8 py-4 rounded hover:bg-gold-light transition-colors text-lg"
          >
            Get a Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
