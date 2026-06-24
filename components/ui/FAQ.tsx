import SectionHeader from "@/components/ui/SectionHeader";
import JsonLd from "@/components/seo/JsonLd";
import { faqPageSchema, type FaqItem } from "@/lib/schema";

interface FAQProps {
  items: FaqItem[];
  heading?: string;
  eyebrow?: string;
}

// Native <details> accordion — accessible and zero JS. Also emits FAQPage
// JSON-LD so the Q&A pairs are extractable by AI search engines.
export default function FAQ({ items, heading = "Frequently Asked Questions", eyebrow = "FAQ" }: FAQProps) {
  if (!items.length) return null;
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={eyebrow} heading={heading} />
        <div className="mt-10 border-t border-border">
          {items.map((item) => (
            <details key={item.q} className="group border-b border-border py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-navy list-none [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="text-gold text-2xl leading-none transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-slate leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd data={faqPageSchema(items)} />
    </section>
  );
}
