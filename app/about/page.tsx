import type { Metadata } from "next";
import { team } from "@/lib/data/team";
import { offices } from "@/lib/data/offices";
import ManagementCard from "@/components/about/ManagementCard";
import OfficeCard from "@/components/about/OfficeCard";
import SectionHeader from "@/components/ui/SectionHeader";
import HomeCTA from "@/components/home/HomeCTA";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About Bonram",
  description:
    "Learn about Bonram (Pty) Ltd — a BBBEE Level 1 South African B2B services company founded in 2013, headquartered in Lephalale, Limpopo, with 5 national offices and 6 service divisions.",
};

const objectives = [
  "Empower communities through job creation and skills development",
  "Build consortium infrastructure for construction and community projects",
  "Apply new technology and innovation in service delivery",
  "Deliver quality products and services at competitive, transparent pricing",
  "Maintain the highest standards of occupational health and safety",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative h-64 lg:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
        <div className="absolute inset-0 hero-mesh opacity-60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2">About Us</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Who We Are</h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gold mb-3">Our Story</p>
              <h2 className="text-3xl font-bold text-navy mb-5">Built on Service. Proven by Performance.</h2>
              <p className="text-slate leading-relaxed mb-4">
                Bonram (Pty) Ltd was established in 2013 in Lephalale, Limpopo — a strategic hub at the heart of South Africa&apos;s energy and mining corridor. From day one, our mandate was clear: deliver government-grade service quality to corporate and institutional clients across every sector we operate in.
              </p>
              <p className="text-slate leading-relaxed mb-4">
                Over a decade later, we have grown from a single-service contractor to a multi-division B2B services company with 5 national offices, 11 industry accreditations, and a client portfolio that includes Eskom, ArcelorMittal, Enel Green Power, EXXARO, and multiple national and provincial government departments.
              </p>
              <p className="text-slate leading-relaxed">
                Our BBBEE Level 1 status is not just a compliance badge — it reflects our foundational commitment to transformation, community empowerment, and building a more inclusive South African economy.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-mist rounded-lg p-6 border border-border">
                <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Our Vision</p>
                <p className="text-navy font-semibold text-lg leading-snug">
                  To be a leading B2B service provider delivering quality products and services at a reasonable price and convenient time.
                </p>
              </div>
              <div className="bg-mist rounded-lg p-6 border border-border">
                <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Our Mission</p>
                <p className="text-navy font-semibold text-lg leading-snug">
                  To provide high quality products and services for the fulfilment of our clients&apos; needs.
                </p>
              </div>
              <div className="bg-mist rounded-lg p-6 border border-border">
                <p className="text-xs font-bold uppercase tracking-widest text-gold mb-3">Our Objectives</p>
                <ul className="space-y-2">
                  {objectives.map((obj) => (
                    <li key={obj} className="flex items-start gap-2.5 text-slate text-sm">
                      <CheckCircle size={16} className="text-gold mt-0.5 flex-shrink-0" />
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-mist border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "2013", label: "Year Founded" },
              { value: "Level 1", label: "BBBEE Status" },
              { value: "5", label: "National Offices" },
              { value: "11", label: "Accreditations" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-lg border border-border p-6">
                <p className="text-3xl font-bold text-gold mb-1">{stat.value}</p>
                <p className="text-slate text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Leadership"
            heading="Our Management Board"
            subheading="Experienced leaders with deep expertise across engineering, operations, and finance."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <ManagementCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Where We Operate"
            heading="National Footprint"
            subheading="Headquartered in Lephalale with branch offices across four provinces."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {offices.map((office) => (
              <OfficeCard key={office.name} office={office} />
            ))}
          </div>

          <div className="mt-10 bg-white rounded-lg border border-border p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Registration Details</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              {[
                { label: "Company Reg.", value: "2013/013325/07" },
                { label: "VAT Number", value: "4040296859" },
                { label: "CSD Supplier", value: "MAAA0156166" },
                { label: "BBBEE Status", value: "Level 1" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-slate text-xs">{item.label}</p>
                  <p className="font-semibold text-navy font-mono">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
