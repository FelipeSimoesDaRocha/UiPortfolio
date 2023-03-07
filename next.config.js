/** @type {import("next").NextConfig} */

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  pwa: {
    dest: "public",
    register: true,
    skipWaitings: true,
    runtimeCaching,
    disabled: process.env.NODE_ENV === "development",
    sw: "sw.js"
  }
})

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["pt", "en"],
    defaultLocale: "pt"
  },
  react: {
    useSuspense: true,
  },
  swcMinify: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.gql$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader'
    })

    return config
  }
};

module.exports = [nextConfig, withPWA];
