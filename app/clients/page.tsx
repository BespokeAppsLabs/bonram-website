import type { Metadata } from "next";
import { clients } from "@/lib/data/clients";
import SectionHeader from "@/components/ui/SectionHeader";
import HomeCTA from "@/components/home/HomeCTA";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  alternates: { canonical: "/clients" },
  title: "Our Clients",
  description:
    "Bonram serves 26+ major clients including Eskom, ArcelorMittal, EXXARO, Enel Green Power, and multiple South African government departments.",
};

const sectors = [
  { key: "energy", label: "Energy & Utilities" },
  { key: "mining", label: "Mining & Resources" },
  { key: "government", label: "Government" },
  { key: "corporate", label: "Corporate" },
] as const;

export default function ClientsPage() {
  return (
    <>
      <section className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
        <div className="absolute inset-0 hero-mesh opacity-60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Trusted By</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Our Clients</h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="26+ Major Clients"
            heading="South Africa's Leading Organisations Trust Bonram"
            subheading="From national SOEs to provincial government departments and major mining companies — our client portfolio spans the full breadth of South African industry."
            className="mb-14"
          />

          {sectors.map((sector) => {
            const sectorClients = clients.filter((c) => c.sectors.includes(sector.key));
            if (sectorClients.length === 0) return null;
            return (
              <div key={sector.key} className="mb-14">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-xl font-bold text-navy">{sector.label}</h2>
                  <span className="text-sm text-slate">({sectorClients.length} clients)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sectorClients.map((client) => (
                    <div key={client.slug} className="bg-mist rounded-lg border border-border p-5 hover:border-gold/50 hover:shadow-sm transition-all">
                      <p className="font-semibold text-navy mb-2">{client.name}</p>
                      {client.projects && client.projects.length > 0 && (
                        <ul className="space-y-1">
                          {client.projects.slice(0, 2).map((p) => (
                            <li key={p} className="text-xs text-slate flex items-start gap-1.5">
                              <span className="text-gold mt-1.5 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                              {p}
                            </li>
                          ))}
                          {client.projects.length > 2 && (
                            <li className="text-xs text-gold font-medium">+{client.projects.length - 2} more projects</li>
                          )}
                        </ul>
                      )}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {client.sectors.map((s) => (
                          <Badge key={s} variant="mist">{s}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
