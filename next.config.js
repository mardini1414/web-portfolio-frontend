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
      {
        source: '/portfolio',
        destination: '/admin/portfolio',
      },
      {
        source: '/mycv',
        destination: '/admin/mycv',
      },
    ];
  },
};

module.exports = nextConfig;
