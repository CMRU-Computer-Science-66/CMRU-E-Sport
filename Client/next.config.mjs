import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, { isServer }) => {
		if (isServer) {
			config.plugins = [...config.plugins, new PrismaPlugin()];
		}
		return config;
	},
	images: {
		domains: ['i.pravatar.cc', 'images.unsplash.com'],
	  },
};

export default nextConfig;
