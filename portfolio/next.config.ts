import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "assets.aceternity.com"], // Ajout des domaines autorisés pour les images
  },
};

export default nextConfig;
