import type { Metadata } from "next";
import { offices } from "@/lib/data/offices";
import ContactForm from "@/components/contact/ContactForm";
import OfficeAddressCard from "@/components/contact/OfficeAddressCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { Phone, Mail, Printer } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact Us",
  description:
    "Get in touch with Bonram (Pty) Ltd. Phone: +27 74 274 8684 | Email: info@bonram.co.za | Head Office: Lephalale, Limpopo.",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Get In Touch</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-3">Contact Us</h1>
          <p className="text-white/70 text-lg">We respond within 24 hours. Ready to partner? Let&apos;s talk.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">Contact Information</h2>

              <div className="space-y-4 mb-8">
                <a href="tel:+27742748684" className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-gold hover:bg-gold/5 transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center group-hover:bg-gold/20">
                    <Phone size={20} className="text-navy group-hover:text-gold transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-slate">Phone</p>
                    <p className="font-semibold text-navy">+27 74 274 8684</p>
                  </div>
                </a>

                <a href="mailto:info@bonram.co.za" className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-gold hover:bg-gold/5 transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center group-hover:bg-gold/20">
                    <Mail size={20} className="text-navy group-hover:text-gold transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-slate">Email</p>
                    <p className="font-semibold text-navy">info@bonram.co.za</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-lg border border-border">
                  <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center">
                    <Printer size={20} className="text-navy" />
                  </div>
                  <div>
                    <p className="text-xs text-slate">Fax</p>
                    <p className="font-semibold text-navy">+27 86 657 5675</p>
                  </div>
                </div>
              </div>

              <div className="bg-mist rounded-lg border border-border p-5 mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Procurement Details</p>
                <div className="space-y-1 text-sm">
                  <p className="text-slate">CSD Supplier: <span className="font-mono font-semibold text-navy">MAAA0156166</span></p>
                  <p className="text-slate">VAT Number: <span className="font-mono font-semibold text-navy">4040296859</span></p>
                  <p className="text-slate">Reg. Number: <span className="font-mono font-semibold text-navy">2013/013325/07</span></p>
                  <p className="text-slate">BBBEE Status: <span className="font-semibold text-navy">Level 1</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-mist border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="5 Offices"
            heading="Where to Find Us"
            className="mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {offices.map((office) => (
              <OfficeAddressCard key={office.name} office={office} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
