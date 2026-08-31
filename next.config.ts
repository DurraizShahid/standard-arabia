import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "standardarabia.com",
      },
      {
        protocol: "https",
        hostname: "**.standardarabia.com",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
