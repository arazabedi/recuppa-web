/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.the-lep.com',
        port: '',
        pathname: '/media/9172/wyca-mowy-lep-tpx-eu.png',
      },
    ],
  },
};


module.exports = nextConfig;
