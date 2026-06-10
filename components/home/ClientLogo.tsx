"use client";

import Image from "next/image";
import { useState } from "react";

interface ClientLogoProps {
  name: string;
  logo?: string;
}

export default function ClientLogo({ name, logo }: ClientLogoProps) {
  const [failed, setFailed] = useState(false);
  const initial = name.charAt(0).toUpperCase();

  if (!logo || failed) {
    return (
      <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
        <span className="text-gold font-bold text-lg leading-none">{initial}</span>
      </div>
    );
  }

  return (
    <Image
      src={logo}
      alt={`${name} logo`}
      width={120}
      height={60}
      className="object-contain max-h-10 w-auto"
      onError={() => setFailed(true)}
    />
  );
}
