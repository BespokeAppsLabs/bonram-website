import { services } from "@/lib/data/services";
import ServiceCard from "./ServiceCard";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeader
            eyebrow="What We Do"
            heading="Eight Divisions. One Trusted Partner."
            subheading="From civil construction and events management to security and cross-border logistics — Bonram delivers government-grade quality across every sector."
            className="mb-14"
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.slug} delay={i * 0.07}>
              <ServiceCard service={service} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
