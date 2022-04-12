const { i18n } = require('./next-i18next.config');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    i18n,
    publicRuntimeConfig: {
        API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
    }
}

module.exports = nextConfig