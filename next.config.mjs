/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.everlast.com',
                port: '',
                pathname: '/cdn/shop/files/**',
            },
            {
                protocol: 'https',
                hostname: 'us.adidascombatsports.com',
                port: '',
                pathname: '/wp-content/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'cletoreyesboxing.com',
                port: '',
                pathname: '/wp-content/uploads/**',
            },
            ],
    },
};

export default nextConfig;