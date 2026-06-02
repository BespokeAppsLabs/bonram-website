import { Award, Shield, MapPin } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const pillars = [
  {
    icon: Award,
    title: "Accredited & Compliant",
    body: "11 industry accreditations including NHBRC, CIDB, PSIRA, and BBBEE Level 1 status — fully equipped for government and corporate tender requirements.",
  },
  {
    icon: Shield,
    title: "Proven Track Record",
    body: "Over a decade serving South Africa's largest institutions: Eskom, ArcelorMittal, EXXARO, and multiple government departments at national and provincial level.",
  },
  {
    icon: MapPin,
    title: "National Footprint",
    body: "Headquartered in Lephalale with branch offices in Centurion, Secunda, East London, and Durban — we deliver wherever your project demands.",
  },
];

export default function TrustPillars() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeader
            eyebrow="Why Bonram"
            heading="The Partner South Africa Trusts"
            className="mb-14"
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <AnimateOnScroll key={pillar.title} delay={i * 0.15}>
                <div className="text-center px-6">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                    <Icon size={32} className="text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">{pillar.title}</h3>
                  <p className="text-slate leading-relaxed text-sm">{pillar.body}</p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
