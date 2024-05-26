/** @type {import('next').NextConfig} */

const dotenv = require("dotenv")

dotenv.config()

function getKey(...keys) {
    const path = keys.map(eachKey => eachKey.toUpperCase()).join('_')
    const key = process.env[path];
    if (!key) {
        throw new Error(
            '<next.config.js.getKey> cannot have empty string as its value.'
        );
    }

    return key;
}


const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config, _options) => {
        config.module.rules.push({
            test: /\.(pdf)$/,
            type: 'asset/resource',
            generator: {
                filename: 'static/chunks/[path][name].[hash][ext]',
            },
        })

        return config
    },
    async headers() {
        return [
            {
                source: '/(.*)?', // Matches all pages
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                ],
            },
        ]
    },

    env: {
        /** Firebase api keys */
        apiKey: getKey('next', 'public', 'firebase', 'api', 'key'),
        authDomain: getKey('next', 'public', 'firebase', 'auth', 'domain'),
        projectId: getKey('next', 'public', 'firebase', 'project', 'id'),
        storageBucket: getKey('next', 'public', 'firebase', 'storage', 'bucket'),
        messagingSenderId: getKey('next', 'public', 'firebase', 'messaging', 'sender', 'id'),
        appId: getKey('next', 'public', 'firebase', 'app', 'id'),
        /** Other api keys */
    }
}

module.exports = nextConfig