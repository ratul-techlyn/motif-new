import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
  },
  images: {
    domains: ['images.unsplash.com', 'wemotif.com'],
  }
};

export default nextConfig;
