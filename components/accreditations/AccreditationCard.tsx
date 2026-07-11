import Image from "next/image";
import { Award } from "lucide-react";
import type { Accreditation } from "@/lib/types";

interface AccreditationCardProps {
  accreditation: Accreditation;
}

export default function AccreditationCard({ accreditation }: AccreditationCardProps) {
  return (
    <div className="bg-white rounded-xl border border-border hover:border-gold hover:shadow-md transition-all p-6">
      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden ${
            accreditation.logoPath !== undefined ? "bg-white border border-border" : "bg-gold/10"
          }`}
        >
          {accreditation.logoPath !== undefined ? (
            <Image
              src={accreditation.logoPath}
              alt={`${accreditation.name} logo`}
              width={48}
              height={48}
              className="object-contain max-h-11 max-w-11 w-auto h-auto"
            />
          ) : (
            <Award size={24} className="text-gold" />
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-navy mb-1">{accreditation.name}</h3>
          {accreditation.regNo && (
            <p className="text-xs font-mono text-gold font-semibold mb-2 bg-gold/5 rounded px-2 py-0.5 inline-block">
              {accreditation.regNo}
            </p>
          )}
          <p className="text-slate text-sm leading-relaxed">{accreditation.description}</p>
        </div>
      </div>
    </div>
  );
}
