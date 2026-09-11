/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.cdn1.vip',
      },
    ],
  },
}

module.exports = nextConfig
