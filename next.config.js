/** @type {import("next").NextConfig} */
const { pwa } = require('./next-pwa.config')

module.exports = nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en",]
  },
  react: {
    useSuspense: false,
  },
  pwa
};;
