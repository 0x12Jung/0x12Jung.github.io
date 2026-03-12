import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
  images: { unoptimized: true },
  assetPrefix: isProd ? "/0x12jung.github.io/" : "",
  basePath: isProd ? "/0x12jung.github.io" : "",
};

export default nextConfig;
