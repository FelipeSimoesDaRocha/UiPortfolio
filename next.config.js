/** @type {import("next").NextConfig} */

module.exports = nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en",]
  },
  react: {
    useSuspense: false,
  },
  pwa: {
    dest: "public",

  },
};;
