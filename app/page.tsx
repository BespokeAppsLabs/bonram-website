import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ServicesGrid from "@/components/home/ServicesGrid";
import TrustPillars from "@/components/home/TrustPillars";
import ClientLogoStrip from "@/components/home/ClientLogoStrip";
import BBBEECallout from "@/components/home/BBBEECallout";
import HomeCTA from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "Bonram (Pty) Ltd | BBBEE Level 1 Multi-Service B2B Company",
  description:
    "South Africa's trusted BBBEE Level 1 B2B services company — building & construction, facilities management, logistics, sanitation, safety solutions, and plant hire. Serving Eskom, ArcelorMittal, government departments and more.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <TrustPillars />
      <ClientLogoStrip />
      <BBBEECallout />
      <HomeCTA />
    </>
  );
}
