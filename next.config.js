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
        source: '/dashboard/portfolio',
        destination: '/admin/portfolio',
      },
      {
        source: '/dashboard/mycv',
        destination: '/admin/mycv',
      },
      {
        source: '/dashboard/portfolio/:id',
        destination: '/admin/portfolio/:id',
      },
      {
        source: '/dashboard/portfolio/create',
        destination: '/admin/portfolio/create',
      },
    ];
  },
  images: {
    domains: ['portfolio-backend.test'],
  },
};

module.exports = nextConfig;
