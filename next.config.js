/** @type {import('next').NextConfig} */

const dotenv = require("dotenv")

dotenv.config()

const BASE_KEY = 'NEXT_PUBLIC_FIREBASE_';
function getFirebasePrivateKey(...keys) {
    const path = [BASE_KEY, keys.join('_')].join('');
    const key = process.env[path];
    if (!key) {
        throw new Error(
            '<getFirebasePrivateKey> cannot have empty string as its value.'
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
        apiKey: getFirebasePrivateKey('API', 'KEY'),
        authDomain: getFirebasePrivateKey('AUTH', 'DOMAIN'),
        projectId: getFirebasePrivateKey('PROJECT', 'ID'),
        storageBucket: getFirebasePrivateKey('STORAGE', 'BUCKET'),
        messagingSenderId: getFirebasePrivateKey('MESSAGING', 'SENDER', 'ID'),
        appId: getFirebasePrivateKey('APP', 'ID'),
    }
}

module.exports = nextConfig