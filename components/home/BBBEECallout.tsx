import Link from "next/link";
import { Award, CheckCircle } from "lucide-react";

const highlights = [
  "CIDB Registered — Government construction tenders",
  "NHBRC Accredited — Building compliance",
  "BBBEE Level 1 Contributor — Maximum procurement points",
  "CSD Supplier No. MAAA0156166",
];

export default function BBBEECallout() {
  return (
    <section className="py-16 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-shrink-0 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 bg-gold/10 border-2 border-gold rounded-lg px-6 py-4">
              <Award size={40} className="text-gold" />
              <div>
                <p className="text-gold font-bold text-2xl">BBBEE Level 1</p>
                <p className="text-white/70 text-sm">Broad-Based Black Economic Empowerment</p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-4">
              Maximum Procurement Points for B-BBEE Compliance
            </h2>
            <p className="text-white/70 mb-6 leading-relaxed">
              Bonram&apos;s BBBEE Level 1 status delivers the highest possible procurement recognition for your organisation&apos;s compliance scorecard. We hold all documentation required for government and corporate tender submissions.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-white/80 text-sm">
                  <CheckCircle size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/accreditations"
              className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-6 py-3 rounded hover:bg-gold-light transition-colors"
            >
              View All Accreditations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
