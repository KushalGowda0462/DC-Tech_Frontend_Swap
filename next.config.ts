import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "cdn.prod.website-files.com",
      },
      {
        protocol: 'https',
        hostname: "images.pexels.com",
      },
      {
        protocol: 'https',
        hostname: "images.unsplash.com",
      },
      {
        protocol: 'https',
        hostname: "api.dicebear.com",
      },
      {
        protocol: 'https',
        hostname: "yotta.com",
      },
      {
        protocol: 'https',
        hostname: "via.placeholder.com",
      },
      {
        protocol: 'https',
        hostname: "i.ytimg.com",
      },
      {
        protocol: 'https',
        hostname: "www.pronixinc.com",
      },
    ],
  }
};

export default nextConfig;
