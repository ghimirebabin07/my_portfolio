import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
  output: "export",
};

export default nextConfig;
