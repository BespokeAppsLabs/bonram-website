import { MapPin } from "lucide-react";
import type { Office } from "@/lib/types";

interface OfficeCardProps {
  office: Office;
}

export default function OfficeCard({ office }: OfficeCardProps) {
  return (
    <div className={`rounded-lg p-6 border ${office.type === "head" ? "bg-navy text-white border-navy" : "bg-white text-charcoal border-border"}`}>
      <div className="flex items-start gap-3">
        <MapPin size={20} className={`mt-0.5 flex-shrink-0 ${office.type === "head" ? "text-gold" : "text-navy"}`} />
        <div>
          <p className={`font-bold text-base mb-1 ${office.type === "head" ? "text-gold" : "text-navy"}`}>
            {office.name}
          </p>
          <p className={`text-sm leading-relaxed ${office.type === "head" ? "text-white/80" : "text-slate"}`}>
            {office.address}<br />
            {office.city}, {office.province} {office.postalCode}
          </p>
          {office.type === "head" && (
            <span className="inline-flex mt-2 text-xs font-bold uppercase tracking-wide text-gold border border-gold/50 rounded px-2 py-0.5">
              Head Office
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
