/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out',
    basePath: '/train-ticket-stub',
    assetPrefix: '/train-ticket-stub/', // assetPrefix requires the trailing slash
};

export default nextConfig;
