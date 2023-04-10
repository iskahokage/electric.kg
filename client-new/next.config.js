/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
  env: {
    API: process.env.API
  },
  reactStrictMode: true,
}


module.exports = nextConfig
