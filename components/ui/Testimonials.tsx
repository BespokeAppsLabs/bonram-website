import { Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/data/testimonials";

// Visible testimonials only. No Review/AggregateRating schema — these are
// placeholder quotes; add structured data when real, attributable reviews exist.
export default function Testimonials() {
  return (
    <section className="py-20 bg-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="What Clients Say" heading="Trusted by the people we work with" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {testimonials.map((quote, i) => (
            <figure key={i} className="bg-white border border-border rounded-lg p-6">
              <Quote size={28} className="text-gold mb-3" />
              <blockquote className="text-charcoal leading-relaxed">{quote}</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-slate">
                — Bonram client
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
