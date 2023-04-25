/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.sanity.io', 'live.staticflickr.com'],
  },
};

module.exports = nextConfig;
