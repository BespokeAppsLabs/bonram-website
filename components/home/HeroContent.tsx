"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1500) {
  const [count, setCount] = useState(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        raf.current = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration]);

  return count;
}

const stats = [
  { value: 8, label: "Service Divisions", suffix: "" },
  { value: 5, label: "National Offices", suffix: "" },
  { value: 26, label: "Major Clients", suffix: "+" },
  { value: 11, label: "Accreditations", suffix: "" },
];

function StatItem({ value, label, suffix }: { value: number; label: string; suffix: string }) {
  const count = useCountUp(value);
  return (
    <div className="border-l-2 border-gold pl-4">
      <div className="text-3xl font-bold text-gold">
        {count}
        {suffix}
      </div>
      <div className="text-white/70 text-sm mt-1">{label}</div>
    </div>
  );
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function HeroContent() {
  return (
    <motion.div
      className="max-w-3xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="flex items-center gap-3 mb-6" variants={itemVariants}>
        <span className="text-xs font-bold uppercase tracking-widest text-gold border border-gold/50 rounded px-3 py-1">
          BBBEE Level 1 Contributor
        </span>
        <span className="text-white/50 text-xs">Est. 2013</span>
      </motion.div>

      <motion.h1
        className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
        variants={itemVariants}
      >
        Delivering Excellence <br />
        <span className="text-gold">Across South Africa</span>
      </motion.h1>

      <motion.p
        className="text-xl text-white/80 leading-relaxed mb-10 max-w-2xl"
        variants={itemVariants}
      >
        Bonram is a BBBEE Level 1 multi-service B2B company trusted by Eskom, ArcelorMittal,
        and government departments nationwide. Building. Managing. Moving. Protecting.
      </motion.p>

      <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-8 py-4 rounded hover:bg-gold-light transition-colors text-lg"
        >
          Our Services <ArrowRight size={20} />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-transparent text-white border-2 border-white font-semibold px-8 py-4 rounded hover:bg-white/10 transition-colors text-lg"
        >
          Get a Quote
        </Link>
      </motion.div>

      <motion.div
        className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
        variants={itemVariants}
      >
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </motion.div>
    </motion.div>
  );
}
