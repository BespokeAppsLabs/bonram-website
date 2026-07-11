import Image from "next/image";
import { ChevronDown } from "lucide-react";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/home/hero.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/85 to-navy-light/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/40 to-transparent" />
        <div className="absolute inset-0 hero-mesh opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <HeroContent />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown size={32} className="text-white/50" />
      </div>
    </section>
  );
}
