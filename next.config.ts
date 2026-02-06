import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/about",
        destination: "/",
      },
      {
        source: "/services",
        destination: "/",
      },
      {
        source: "/portfolio",
        destination: "/",
      },
      {
        source: "/contact",
        destination: "/",
      },
    ];
  },
};

export default nextConfig;
