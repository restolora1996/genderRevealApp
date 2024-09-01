/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	publicRuntimeConfig: {
		CUSTOM_ENV: process.env.CUSTOM_ENV || 'development'
	}
};

export default nextConfig;
