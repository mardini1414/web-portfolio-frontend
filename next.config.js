/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/auth/login',
      },
      {
        source: '/dashboard',
        destination: '/admin/dashboard',
      },
    ];
  },
};

module.exports = nextConfig;
