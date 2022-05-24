const path = require("path");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(process.cwd(), "styles")],
  },
  swcMinify: true,
  eslint: {
    dirs: ["src"],
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
