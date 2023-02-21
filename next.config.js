/** @type {import("next").NextConfig} */

module.exports = nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en",]
  },
};;
