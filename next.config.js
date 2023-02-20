/** @type {import('next').NextConfig} */

module.exports = nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ["pt-BR", "en",],
    defaultLocale: "pt-BR"
  },
};;
