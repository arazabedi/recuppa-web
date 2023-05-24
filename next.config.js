/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.pexels.com",
				port: "",
				pathname: "/photos/16884742/pexels-photo-16884742/free-photo-of-sea-flight-dawn-sunset.jpeg",
			},
		],
	},

};

module.exports = nextConfig;
