/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["s3.ap-northeast-2.amazonaws.com"],
  },
};

module.exports = nextConfig;
