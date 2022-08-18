/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['murderpedia.org', 'images.hindustantimes.com'],
  },
}

module.exports = nextConfig
