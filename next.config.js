/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/auth/Login',
      },
      {
        source: '/dashboard',
        destination: '/admin/Dashboard',
      },
      {
        source: '/dashboard/portfolio',
        destination: '/admin/Portfolio',
      },
      {
        source: '/dashboard/mycv',
        destination: '/admin/Mycv',
      },
      {
        source: '/dashboard/portfolio/:id',
        destination: '/admin/portfolio/:id',
      },
      {
        source: '/dashboard/portfolio/create',
        destination: '/admin/portfolio/Create',
      },
    ];
  },
  images: {
    domains: ['portfolio-backend.test'],
  },
};

module.exports = nextConfig;
