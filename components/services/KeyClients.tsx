import { clients } from "@/lib/data/clients";
import ClientLogo from "@/components/home/ClientLogo";

interface KeyClientsProps {
  names: string[];
}

export default function KeyClients({ names }: KeyClientsProps) {
  return (
    <div className="mt-6 bg-mist rounded-xl border border-border p-5">
      <p className="text-xs font-bold uppercase tracking-widest text-gold mb-4">Key Clients</p>
      <div className="space-y-3">
        {names.map((name) => {
          const client = clients.find((c) => c.name === name);
          return (
            <div key={name} className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <ClientLogo name={name} logo={client?.logoPath} />
              </div>
              <span className="text-sm text-slate">{name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
