import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

export default function nextConfig(phase: string): NextConfig {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      async rewrites() {
        return {
          beforeFiles: [
            {
              source: "/",
              destination: "/landing.html",
            },
          ],
          afterFiles: [],
          fallback: [],
        };
      },
    };
  }

  return {
    output: "export",
    images: {
      unoptimized: true,
    },
  };
}
