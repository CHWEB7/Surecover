import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Don't auto-generate AGENTS.md / CLAUDE.md files in the repo root.
  agentRules: false,
};

export default nextConfig;
