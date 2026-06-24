import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { offices } from "@/lib/data/offices";

const serviceLinks = [
  { label: "Building & Construction", href: "/services/building-construction" },
  { label: "Facilities Management", href: "/services/facilities-management" },
  { label: "Logistics & Transport", href: "/services/logistics-transport" },
  { label: "Sanitation & Waste", href: "/services/sanitation-waste" },
  { label: "Safety Solutions", href: "/services/safety-solutions" },
  { label: "Plant & Tool Hire", href: "/services/plant-tool-hire" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Clients", href: "/clients" },
  { label: "Accreditations", href: "/accreditations" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Image
              src="/logo/bonram-logo.png"
              alt="Bonram (Pty) Ltd"
              width={140}
              height={48}
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              BBBEE Level 1 multi-service B2B company delivering excellence across South Africa since 2013.
            </p>
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded px-3 py-1.5">
              <span className="text-gold font-bold text-sm">BBBEE Level 1</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+27742748684" className="flex items-start gap-3 text-white/70 hover:text-gold text-sm transition-colors">
                  <Phone size={16} className="mt-0.5 flex-shrink-0 text-gold" />
                  +27 74 274 8684
                </a>
              </li>
              <li>
                <a href="mailto:info@bonram.co.za" className="flex items-start gap-3 text-white/70 hover:text-gold text-sm transition-colors">
                  <Mail size={16} className="mt-0.5 flex-shrink-0 text-gold" />
                  info@bonram.co.za
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70 text-sm">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-gold" />
                  <span>06 Geelhaak Street, Onverwacht, Lephalale 0557, Limpopo</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Areas We Serve</h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {offices.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/${o.slug}`}
                  className="text-white/70 hover:text-gold text-sm transition-colors"
                >
                  {o.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50 text-xs">
          <p>© {new Date().getFullYear()} Bonram (Pty) Ltd. All rights reserved. Reg: 2013/013325/07 | VAT: 4040296859</p>
          <p>CSD Supplier: MAAA0156166</p>
        </div>
      </div>
    </footer>
  );
}
