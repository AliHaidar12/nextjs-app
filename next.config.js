/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  
  target: "serverless"
};

module.exports = nextConfig;