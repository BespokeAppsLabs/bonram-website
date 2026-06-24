import type { MetadataRoute } from "next";
import { offices } from "@/lib/data/offices";

const base = "https://www.bonram.co.za";

const serviceRoutes = [
  "building-construction",
  "facilities-management",
  "logistics-transport",
  "sanitation-waste",
  "safety-solutions",
  "equipment-hire",
  "events-management",
  "security-services",
  "plant-tool-hire",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/about`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/services`, changeFrequency: "monthly", priority: 0.9 },
    ...serviceRoutes.map((s) => ({
      url: `${base}/services/${s}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...offices.map((o) => ({
      url: `${base}/${o.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${base}/clients`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/accreditations`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.9 },
  ];
}
