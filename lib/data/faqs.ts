import type { FaqItem } from "@/lib/schema";
import type { Service, Office } from "@/lib/types";

// Direct-answer FAQs (40–60 words) — optimised for AI-search extraction.
// All facts are drawn from real company data in this repo.

export const generalFaqs: FaqItem[] = [
  {
    q: "Is Bonram BBBEE Level 1 certified?",
    a: "Yes. Bonram is a BBBEE Level 1, 100% Black-owned company. Engaging Bonram gives clients the maximum B-BBEE procurement recognition (135% recognised spend) on their scorecards — a direct advantage on tenders and enterprise-development targets.",
  },
  {
    q: "What areas does Bonram serve?",
    a: "Bonram operates from five offices — Lephalale (Limpopo), Centurion (Gauteng), Secunda (Mpumalanga), East London (Eastern Cape) and Durban (KwaZulu-Natal) — and delivers nationally across South Africa, with cross-border logistics into neighbouring countries.",
  },
  {
    q: "What services does Bonram offer?",
    a: "Eight B2B service lines from one accredited supplier: building & construction, facilities management, logistics & transport, sanitation & waste, safety solutions, equipment hire, events management and security services.",
  },
  {
    q: "Is Bonram a registered, tender-ready supplier?",
    a: "Yes. Bonram is CSD-registered (MAAA0156166), VAT-registered (4040296859), company registration 2013/013325/07, and accredited with NHBRC, CIDB, PSIRA, SAIOSH and more — fully audit- and tender-ready.",
  },
  {
    q: "How quickly does Bonram respond to quote requests?",
    a: "Bonram responds to quote and tender enquiries within 24 hours. Call +27 74 274 8684 or email info@bonram.co.za to get started.",
  },
  {
    q: "Can Bonram handle dangerous goods transport?",
    a: "Yes. Bonram's drivers hold professional driving permits and dangerous-goods certifications for transporting gas and petroleum products, including cross-border between Zimbabwe and South Africa.",
  },
];

export function serviceFaqs(service: Service): FaqItem[] {
  return [
    {
      q: `What does Bonram's ${service.name} service include?`,
      a: service.description,
    },
    {
      q: `Which areas does Bonram provide ${service.name} in?`,
      a: `Bonram delivers ${service.name} across South Africa from offices in Lephalale, Centurion, Secunda, East London and Durban.`,
    },
    {
      q: `Is Bonram experienced and accredited for ${service.name}?`,
      a: `Yes. Bonram is a BBBEE Level 1 company holding the relevant industry accreditations for ${service.name}, with delivery experience for clients including ${service.featuredClients.join(", ")}.`,
    },
  ];
}

export function locationFaqs(office: Office): FaqItem[] {
  const { city, province, type } = office;
  return [
    {
      q: `Does Bonram provide services in ${city}?`,
      a: `Yes. Bonram has ${type === "head" ? "its head office" : "a branch"} in ${city}, ${province}, delivering all eight service lines across ${city} and the wider ${province} region.`,
    },
    {
      q: `Is Bonram BBBEE Level 1 in ${city}?`,
      a: `Yes — Bonram is a BBBEE Level 1, 100% Black-owned company serving ${city} and ${province}, giving local clients the maximum procurement-scorecard recognition.`,
    },
    {
      q: `What services does Bonram offer in ${city}?`,
      a: `In ${city}, Bonram offers building & construction, facilities management, logistics, sanitation, safety solutions, plant and equipment hire, events management and security services.`,
    },
    {
      q: `How do I get a quote from Bonram in ${city}?`,
      a: `Call +27 74 274 8684 or email info@bonram.co.za. Bonram responds to ${city} quote and tender enquiries within 24 hours.`,
    },
  ];
}
