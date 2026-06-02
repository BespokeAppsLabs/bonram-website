import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
    remotePatterns: [
      { protocol: "https", hostname: "logo.clearbit.com" },
    ],
  },
};

export default nextConfig;
