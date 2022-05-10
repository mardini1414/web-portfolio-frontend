/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    domains: ['portfolioweb-backend.000webhostapp.com'],
  },
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
        destination: '/admin/Mycv',
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
};

module.exports = nextConfig;
