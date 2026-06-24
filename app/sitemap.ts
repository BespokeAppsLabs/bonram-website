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
  const lastModified = new Date();
  return [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/about`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    ...serviceRoutes.map((s) => ({
      url: `${base}/services/${s}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...offices.map((o) => ({
      url: `${base}/${o.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${base}/clients`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/accreditations`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/contact`, lastModified, changeFrequency: "yearly", priority: 0.9 },
  ];
}
