import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "assets.aceternity.com"], // Ajout des domaines autorisés
  },
};

export default nextConfig;
