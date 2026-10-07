import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Vercel restored a stale Turbopack cache once and shipped old CSS with new markup; the build is fast without it.
    turbopackFileSystemCacheForBuild: false,
  },
};

export default nextConfig;
