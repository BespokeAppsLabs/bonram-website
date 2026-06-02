"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}

export default function AnimateOnScroll({
  children,
  delay = 0,
  className,
  direction = "up",
}: AnimateOnScrollProps) {
  const initial = {
    opacity: 0,
    y: direction === "up" ? 32 : 0,
    x: direction === "left" ? -32 : direction === "right" ? 32 : 0,
  };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
