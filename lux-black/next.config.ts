import type { NextConfig } from "next";

// When building for GitHub Pages the site is served from a project subpath
// (https://<owner>.github.io/setup/), so we prefix routes/assets accordingly.
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = isPages ? "/setup" : "";

const nextConfig: NextConfig = {
  // Round 1 is fully static — emit a static HTML/CSS bundle for GitHub Pages.
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  // Exposed to the client so links/CTAs can build correct absolute paths later.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
