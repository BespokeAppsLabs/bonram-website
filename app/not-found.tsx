import type { Metadata } from "next";
import { Home, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import RedirectTimer from "@/components/RedirectTimer";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist or has moved.",
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-mist px-4 py-24">
      <div className="max-w-xl text-center">
        <p className="text-7xl font-bold text-gold mb-4">404</p>
        <h1 className="text-3xl font-bold text-navy mb-4">Page Not Found</h1>
        <p className="text-slate text-lg leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has moved.{" "}
          <RedirectTimer seconds={6} to="/" />
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary" size="lg">
            <Home size={20} className="mr-2" /> Go to Home
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Us <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
