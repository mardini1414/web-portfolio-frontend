/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  async rewrites() {
    return [
      {
        source: 'https://web-portfolio-frontend.vercel.app/login',
        destination: 'https://web-portfolio-frontend.vercel.app/auth/Login',
      },
      {
        source: 'https://web-portfolio-frontend.vercel.app/dashboard',
        destination:
          'https://web-portfolio-frontend.vercel.app/admin/Dashboard',
      },
      {
        source: 'https://web-portfolio-frontend.vercel.app/dashboard/portfolio',
        destination:
          'https://web-portfolio-frontend.vercel.app/admin/Portfolio',
      },
      {
        source: 'https://web-portfolio-frontend.vercel.app/dashboard/mycv',
        destination: 'https://web-portfolio-frontend.vercel.app/admin/Mycv',
      },
      {
        source:
          'https://web-portfolio-frontend.vercel.app/dashboard/portfolio/:id',
        destination:
          'https://web-portfolio-frontend.vercel.app/admin/portfolio/:id',
      },
      {
        source:
          'https://web-portfolio-frontend.vercel.app/dashboard/portfolio/create',
        destination:
          'https://web-portfolio-frontend.vercel.app/admin/portfolio/Create',
      },
    ];
  },
  images: {
    domains: ['portfolio-backend.000webhostapp.com'],
  },
};

module.exports = nextConfig;
