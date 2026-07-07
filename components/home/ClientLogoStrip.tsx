import SectionHeader from "@/components/ui/SectionHeader";
import { clients } from "@/lib/data/clients";
import ClientLogo from "./ClientLogo";

// Single source of truth: show every client that has a real logo asset.
const featured = clients.filter((c) => c.logoPath !== undefined);
const remaining = clients.length - featured.length;

export default function ClientLogoStrip() {
  return (
    <section className="py-16 bg-white border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeader
          eyebrow="Trusted By"
          heading="South Africa's Leading Organisations"
          subheading="From national SOEs to provincial government departments — our clients represent the backbone of South African industry."
        />
      </div>

      <div className="marquee-container">
        <div className="marquee-track flex gap-5 w-max px-5">
          {[...featured, ...featured].map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex-shrink-0 flex flex-col items-center justify-between gap-3 w-40 h-28 bg-mist rounded-xl border border-border px-4 py-4 shadow-sm hover:border-gold/40 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center justify-center flex-1 w-full">
                <ClientLogo name={client.name} logo={client.logoPath} />
              </div>
              <span className="text-[10px] font-semibold text-slate text-center leading-tight line-clamp-2 w-full">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {remaining > 0 && (
        <p className="text-center mt-8 text-slate text-sm px-4">
          + {remaining} more clients across government, energy, mining, and corporate sectors.
        </p>
      )}
    </section>
  );
}
