import SectionHeader from "@/components/ui/SectionHeader";
import ClientLogo from "./ClientLogo";

const featured = [
  { name: "Eskom", domain: "eskom.co.za" },
  { name: "EXXARO", domain: "exxaro.com" },
  { name: "Enel Green Power", domain: "enelgreenpower.com" },
  { name: "ArcelorMittal SA", domain: "arcelormittal.com" },
  { name: "Eskom Rotek Industries", domain: "eskom.co.za" },
  { name: "Ledjadja Coal", domain: undefined },
  { name: "Agricultural Research Council", domain: "arc.agric.za" },
  { name: "Lephalale Municipality", domain: "lephalale.gov.za" },
  { name: "SAPS", domain: "saps.gov.za" },
  { name: "Limpopo Legislature", domain: undefined },
  { name: "TWF Corporate", domain: undefined },
  { name: "Ankole Communications JV", domain: undefined },
];

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
                <ClientLogo name={client.name} domain={client.domain} />
              </div>
              <span className="text-[10px] font-semibold text-slate text-center leading-tight line-clamp-2 w-full">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center mt-8 text-slate text-sm px-4">
        + 14 more clients across government, energy, mining, and corporate sectors.
      </p>
    </section>
  );
}
