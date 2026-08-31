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
  typescript: { ignoreBuildErrors: true },
  experimental: {
    serverActions: {
      bodySizeLimit: "8mb",
    },
  },
};

export default nextConfig;
