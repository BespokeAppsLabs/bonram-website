import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCTAProps {
  serviceName: string;
}

export default function ServiceCTA({ serviceName }: ServiceCTAProps) {
  return (
    <section className="py-16 bg-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-gold mb-3">Get Started</p>
        <h2 className="text-3xl font-bold text-white mb-4">
          Need {serviceName} Services?
        </h2>
        <p className="text-white/70 mb-8 leading-relaxed">
          Contact our team for a tailored quote. We respond within 24 hours.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-8 py-4 rounded hover:bg-gold-light transition-colors text-lg"
        >
          Request a Quote <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}
