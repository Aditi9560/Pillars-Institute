/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // Disabled to enable API routes
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["localhost", "images.unsplash.com"],
    unoptimized: true,
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  experimental: {
    optimizeCss: false,
  },
};

module.exports = nextConfig;
