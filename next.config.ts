import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Add 'cdn.sanity.io' here for external images
  },
};

export default nextConfig;
