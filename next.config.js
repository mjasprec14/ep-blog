/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  class: 'dark',
  images: {
    domains: ['cdn.sanity.io', 'live.staticflickr.com'],
  },
};

module.exports = nextConfig;
