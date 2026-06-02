import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function HomeCTA() {
  return (
    <section className="py-20 bg-mist">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-gold mb-4">Ready to Partner?</p>
        <h2 className="text-4xl font-bold text-navy mb-5">
          Let&apos;s Build Something Great Together
        </h2>
        <p className="text-slate text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Whether you need a BBBEE Level 1 partner for your next tender, a facilities management team for your site, or heavy plant for your project — Bonram delivers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-navy text-white font-semibold px-8 py-4 rounded hover:bg-navy-dark transition-colors text-lg"
          >
            Get a Quote <ArrowRight size={20} />
          </Link>
          <a
            href="tel:+27742748684"
            className="inline-flex items-center justify-center gap-2 bg-white text-navy border-2 border-navy font-semibold px-8 py-4 rounded hover:bg-mist transition-colors text-lg"
          >
            <Phone size={20} /> Call Us Now
          </a>
        </div>

        <p className="mt-8 text-slate text-sm">
          Head Office: Lephalale, Limpopo &nbsp;|&nbsp; info@bonram.co.za &nbsp;|&nbsp; +27 74 274 8684
        </p>
      </div>
    </section>
  );
}
