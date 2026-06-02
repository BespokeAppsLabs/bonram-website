"use client";

import Link from "next/link";
import { ArrowRight, HardHat, Sparkles, Truck, Droplets, ShieldCheck, Wrench, Calendar, Lock } from "lucide-react";
import type { Service } from "@/lib/types";
import { useRef, type MouseEvent } from "react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  HardHat,
  Sparkles,
  Truck,
  Droplets,
  ShieldCheck,
  Wrench,
  Calendar,
  Lock,
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? HardHat;
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -7;
    const rotateY = ((x - cx) / cx) * 7;
    card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        "perspective(700px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    }
  };

  return (
    <Link
      ref={cardRef}
      href={`/services/${service.slug}`}
      className="group flex flex-col bg-white rounded-lg border border-border hover:border-gold hover:shadow-xl overflow-hidden"
      style={{
        transition: "transform 0.35s ease, box-shadow 0.2s ease, border-color 0.2s ease",
        willChange: "transform",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="p-8 flex-1">
        <div className="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
          <Icon size={24} className="text-navy group-hover:text-gold transition-colors" />
        </div>
        <h3 className="text-xl font-semibold text-navy mb-3">{service.name}</h3>
        <p className="text-slate text-sm leading-relaxed">{service.shortDescription}</p>
      </div>
      <div className="px-8 pb-6">
        <span className="inline-flex items-center gap-1.5 text-gold font-semibold text-sm group-hover:gap-3 transition-all">
          Learn more <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
