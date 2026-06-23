"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function RedirectTimer({ seconds = 6, to = "/" }: { seconds?: number; to?: string }) {
  const router = useRouter();
  const [remaining, setRemaining] = useState(seconds);

  useEffect(() => {
    if (remaining <= 0) {
      router.push(to);
      return;
    }
    const t = setTimeout(() => setRemaining((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [remaining, router, to]);

  return <>Redirecting you to the home page in {remaining}s.</>;
}
