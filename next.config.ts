import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Don't auto-generate AGENTS.md / CLAUDE.md files in the repo root.
  agentRules: false,
  images: {
    // Next 16 defaults to [75] only; allow high-quality portraits.
    qualities: [75, 100],
  },
};

export default nextConfig;
