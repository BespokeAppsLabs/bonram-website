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
];

// Fixed content-release date — bump when page content actually changes.
// (Do NOT use `new Date()`: a timestamp that churns every build is treated
// as a fake freshness signal and ignored by search engines.)
const lastModified = new Date("2026-06-24");

export default function sitemap(): MetadataRoute.Sitemap {
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
