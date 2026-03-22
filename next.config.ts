import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  sassOptions: {
    silenceDeprecations: ["import", "global-builtin"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
