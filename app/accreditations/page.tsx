import type { Metadata } from "next";
import { accreditations } from "@/lib/data/accreditations";
import AccreditationCard from "@/components/accreditations/AccreditationCard";
import SectionHeader from "@/components/ui/SectionHeader";
import HomeCTA from "@/components/home/HomeCTA";
import { FileText, Award } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/accreditations" },
  title: "Accreditations & Compliance",
  description:
    "Bonram holds 11 industry accreditations including NHBRC, CIDB, PSIRA, QCTO, SARS Customs, and BBBEE Level 1. CSD Supplier No. MAAA0156166.",
};

export default function AccreditationsPage() {
  return (
    <>
      <section className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
        <div className="absolute inset-0 hero-mesh opacity-60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Compliance</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Accreditations</h1>
        </div>
      </section>

      <section className="py-12 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Award size={40} className="text-gold" />
              <div>
                <p className="text-white font-bold text-xl">BBBEE Level 1 Contributor</p>
                <p className="text-white/70 text-sm">Maximum procurement recognition — Reg: 2013/013325/07</p>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-white/50 text-xs uppercase tracking-wide">CSD Supplier Number</p>
              <p className="text-gold font-mono font-bold text-lg">MAAA0156166</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="11 Accreditations"
            heading="Fully Accredited Across All Divisions"
            subheading="Every accreditation we hold translates directly to client confidence and compliance readiness — whether for government procurement or corporate contract requirements."
            className="mb-12"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {accreditations.map((acc) => (
              <AccreditationCard key={acc.slug} accreditation={acc} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gold mb-1">Company Profile</p>
              <h3 className="text-xl font-bold text-navy">Download Our Full Profile</h3>
              <p className="text-slate text-sm mt-1">Includes registration documents, accreditation certificates, and project portfolio.</p>
            </div>
            <a
              href="/documents/bonram-company-profile-2025.pdf"
              download
              className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-6 py-3 rounded hover:bg-navy-dark transition-colors whitespace-nowrap"
            >
              <FileText size={18} /> Download Profile (PDF)
            </a>
          </div>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
