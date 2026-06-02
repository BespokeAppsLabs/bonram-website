import { MapPin } from "lucide-react";
import type { Office } from "@/lib/types";

interface OfficeAddressCardProps {
  office: Office;
}

export default function OfficeAddressCard({ office }: OfficeAddressCardProps) {
  return (
    <div className={`rounded-lg p-5 border ${office.type === "head" ? "border-gold bg-gold/5" : "border-border bg-white"}`}>
      <div className="flex items-start gap-3">
        <MapPin size={18} className={`mt-0.5 flex-shrink-0 ${office.type === "head" ? "text-gold" : "text-navy"}`} />
        <div>
          <p className="font-semibold text-navy text-sm">{office.name}</p>
          <p className="text-slate text-xs mt-1 leading-relaxed">
            {office.address}<br />
            {office.city}, {office.province} {office.postalCode}
          </p>
        </div>
      </div>
    </div>
  );
}
