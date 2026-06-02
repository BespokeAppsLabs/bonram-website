import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Service } from "@/lib/types";

interface ServiceHeroProps {
  service: Service;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative h-72 lg:h-96 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
      <div className="absolute inset-0 hero-mesh opacity-60" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-10">
        <nav className="flex items-center gap-1.5 text-white/60 text-sm mb-3">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <ChevronRight size={14} />
          <span className="text-white">{service.name}</span>
        </nav>
        <h1 className="text-4xl lg:text-5xl font-bold text-white">{service.name}</h1>
        <p className="text-white/80 mt-2 text-lg">{service.shortDescription}</p>
      </div>
    </section>
  );
}
