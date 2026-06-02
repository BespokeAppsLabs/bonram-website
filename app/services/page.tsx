import type { Metadata } from "next";
import { services } from "@/lib/data/services";
import ServiceCard from "@/components/home/ServiceCard";
import SectionHeader from "@/components/ui/SectionHeader";
import HomeCTA from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Bonram delivers 8 B2B service divisions: building & construction, facilities management, logistics, events management, sanitation, safety solutions, equipment hire, and security services.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
        <div className="absolute inset-0 hero-mesh opacity-60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2">What We Do</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Our Services</h1>
        </div>
      </section>

      <section className="py-20 bg-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Eight Divisions"
            heading="End-to-End B2B Service Delivery"
            subheading="Whether you need civil works, industrial cleaning, events management, security, or cross-border logistics — Bonram has the accreditations, equipment, and experience to deliver."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
