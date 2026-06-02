import Image from "next/image";
import { User } from "lucide-react";
import type { TeamMember } from "@/lib/types";

interface ManagementCardProps {
  member: TeamMember;
}

export default function ManagementCard({ member }: ManagementCardProps) {
  return (
    <div className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-56 bg-mist flex items-center justify-center">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top"
            onError={undefined}
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-navy/10 flex items-center justify-center">
            <User size={48} className="text-navy/40" />
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-navy">{member.name}</h3>
        <p className="text-gold font-medium text-sm mb-4">{member.role}</p>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate mb-2">Background</p>
          <ul className="space-y-1">
            {member.background.map((item) => (
              <li key={item} className="text-sm text-charcoal flex items-start gap-2">
                <span className="text-gold mt-1.5 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
