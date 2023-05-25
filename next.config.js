/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.tsx', 'api.ts'],
  images: {
    domains: ['avatars.githubusercontent.com', 'images.unsplash.com', 'lh3.googleusercontent.com'],
  },
  
}

module.exports = nextConfig
