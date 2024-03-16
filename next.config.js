/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate-plugin");

const { i18n } = require("./i18n");

const nextConfig = nextTranslate({
  reactStrictMode: true,
  i18n,
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stg.kalemon.joacademy.edu.jo",
      },
    ],
  },
});

module.exports = nextConfig;
