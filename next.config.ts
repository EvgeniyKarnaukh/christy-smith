import type { NextConfig } from "next";
import { absoluteUrl } from "./lib/site";

const nextConfig: NextConfig = {
  async headers() {
    return [{
      source: "/three-stories-one-family.pdf",
      headers: [{ key: "Link", value: `<${absoluteUrl("/")}>; rel="canonical"` }],
    }];
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
