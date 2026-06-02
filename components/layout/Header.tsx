import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Clients", href: "/clients" },
  { label: "Accreditations", href: "/accreditations" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-navy shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/logo/bonram-logo.png"
              alt="Bonram (Pty) Ltd"
              width={140}
              height={48}
              style={{ height: "auto" }}
              className="max-h-12 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-gold font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+27742748684"
              className="text-white/80 hover:text-gold text-sm transition-colors"
            >
              +27 74 274 8684
            </a>
            <Link
              href="/contact"
              className="bg-gold text-navy font-semibold px-5 py-2 rounded hover:bg-gold-light transition-colors text-sm"
            >
              Get a Quote
            </Link>
          </div>

          <div className="relative">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
