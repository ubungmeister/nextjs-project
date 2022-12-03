/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = module.exports = {
  experimental: {
    swcPlugins: [
      ['next-superjson-plugin', {}],
    ],
  },

}
