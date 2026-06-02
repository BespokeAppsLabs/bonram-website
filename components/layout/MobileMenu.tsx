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
        className="p-2 text-white hover:text-gold transition-colors"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-navy-dark border-t border-white/10 shadow-xl z-50">
          <nav className="flex flex-col py-4">
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
      )}
    </div>
  );
}
