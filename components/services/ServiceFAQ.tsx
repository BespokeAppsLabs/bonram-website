import FAQ from "@/components/ui/FAQ";
import { serviceFaqs } from "@/lib/data/faqs";
import type { Service } from "@/lib/types";

export default function ServiceFAQ({ service }: { service: Service }) {
  return <FAQ items={serviceFaqs(service)} heading={`${service.name} — FAQs`} />;
}
