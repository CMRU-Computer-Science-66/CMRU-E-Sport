import { PrismaPlugin } from '@prisma/nextjs-monorepo-workaround-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }
    return config;
  },
  transpilePackages: [
    '@cmru-comsci-66/e-sport-database',
    '@cmru-comsci-66/e-sport-nextjs-server',
  ],
  images: {
    domains: ['i.pravatar.cc', 'images.unsplash.com'],
  },
};

export default nextConfig;
