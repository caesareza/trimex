/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  env: {
    APP_ENV: process.env.APP_ENV,
    API_URL: process.env.API_URL,
    BACKEND_URL: process.env.BACKEND_URL,
  },
  images: {
    domains: ['res.cloudinary.com', 'localhost'],
  },
}

module.exports = nextConfig
