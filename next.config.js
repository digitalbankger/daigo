const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const ASSET_PREFIX = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
    reactStrictMode: true,
    output: 'standalone',
    basePath: ASSET_PREFIX,
    assetPrefix: ASSET_PREFIX,
    images: {
        loader: 'custom',
        loaderFile: './image-loader.js',
        deviceSizes: [414, 828, 1024, 1440, 1920, 2560, 3840],
    },
    async rewrites() {
        return {
            fallback: [
                {
                    source: '/nextapi/:path*',
                    destination: `/api/:path*`,
                },
                {
                    source: '/api/:path*',
                    destination: `${process.env.NEXT_PUBLIC_API_HOST || ''}/api/:path*`,
                },
                {
                    source: '/storage/:path*',
                    destination: `${process.env.NEXT_PUBLIC_API_HOST || ''}/storage/:path*`,
                },
                {
                    source: '/upload/:path*',
                    destination: `${process.env.NEXT_PUBLIC_API_HOST || ''}/upload/:path*`,
                },
                {
                    source: '/uploads/:path*',
                    destination: `${process.env.NEXT_PUBLIC_API_HOST || ''}/uploads/:path*`,
                },
            ],
        };
    },
    sassOptions: {
        additionalData: `$asset-prefix: "${ASSET_PREFIX}";`,
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg)$/i,
            type: 'asset',
            resourceQuery: /url/, // *.svg?url
        });

        config.module.rules.push({
            test: /\.svg$/i,
            issuer: { and: [/\.(js|ts|md)x?$/] },
            resourceQuery: { not: [/url/] },
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        prettier: false,
                        svgo: true,
                        svgoConfig: {
                            plugins: [
                                {
                                    name: 'preset-default',
                                    params: {
                                        overrides: { removeViewBox: false },
                                    },
                                },
                                'prefixIds',
                            ],
                        },
                        titleProp: true,
                    },
                },
            ],
        });

        config.module.rules.push({
            test: /\.(glsl|frag|vert)$/,
            use: [require.resolve('raw-loader'), require.resolve('glslify-loader')],
        });

        return config;
    },
    productionBrowserSourceMaps: true,
});

module.exports = nextConfig;
