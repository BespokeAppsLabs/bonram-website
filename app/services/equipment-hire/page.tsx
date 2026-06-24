import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/data/services";
import { accreditations } from "@/lib/data/accreditations";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCTA from "@/components/services/ServiceCTA";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import SectionHeader from "@/components/ui/SectionHeader";
import AccreditationCard from "@/components/accreditations/AccreditationCard";
import { CheckCircle } from "lucide-react";

const slug = "equipment-hire";

export const metadata: Metadata = {
  alternates: { canonical: "/services/equipment-hire" },
  title: "Equipment Hire",
  description: "Event, sanitation, and construction equipment hire — tents, generators, mobile toilets, heavy plant, scaffolding, and more. CIDB registered.",
};

export default function EquipmentHirePage() {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  const serviceAccreds = accreditations.filter((a) => service.accreditations.includes(a.slug));

  return (
    <>
      <ServiceHero service={service} />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-xs font-bold uppercase tracking-widest text-gold mb-3">Overview</p>
              <h2 className="text-2xl font-bold text-navy mb-5">What We Deliver</h2>
              <p className="text-slate leading-relaxed mb-8">{service.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {["Events", "Sanitation", "Construction"].map((cat) => (
                  <div key={cat} className="bg-mist rounded-lg border border-border px-4 py-3 text-center">
                    <p className="font-semibold text-navy text-sm">{cat}</p>
                    <p className="text-slate text-xs mt-0.5">Equipment Hire</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {service.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-gold mt-0.5 flex-shrink-0" />
                    <p className="text-charcoal text-sm">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader eyebrow="Accreditations" heading="Relevant Certifications" align="left" className="mb-6" />
              <div className="space-y-4">
                {serviceAccreds.map((acc) => (
                  <AccreditationCard key={acc.slug} accreditation={acc} />
                ))}
              </div>
              <div className="mt-6 bg-mist rounded-lg border border-border p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Key Clients</p>
                <ul className="space-y-1">
                  {service.featuredClients.map((c) => (
                    <li key={c} className="text-sm text-slate">{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceFAQ service={service} />
      <ServiceCTA serviceName={service.name} />
    </>
  );
}
