/** @type {import('next').NextConfig} */

const nextTranslate = require("next-translate-plugin");

const nextConfig = nextTranslate({
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    removeConsole: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      tls: false,
      child_process: false,
      net: false,
      dns: false,
    };

    return config;
  },
  i18n: {
    locales: ["id", "en"],
    defaultLocale: "id",
  },
});

module.exports = nextConfig;
