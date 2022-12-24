/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["encrypted-tbn0.gstatic.com", "cdn.sanity.io"]
  }
}
