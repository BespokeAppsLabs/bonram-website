"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Clients", href: "/clients" },
  { label: "Accreditations", href: "/accreditations" },
  { label: "Contact", href: "/contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="p-2 text-white hover:text-gold transition-colors"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Left slide-in drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 max-w-[80vw] bg-navy-dark border-r border-white/10 shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex h-full flex-col py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-6 py-3 text-white hover:text-gold hover:bg-white/5 transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 pt-4 pb-2">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-gold text-navy font-semibold py-3 px-6 rounded hover:bg-gold-light transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
