/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'minhvuong12222',
        mongodb_password: 'Potay1234.',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site-dev'
      }
    }
  }

  return {
    // reactStrictMode: true,
    env: {
      mongodb_username: 'minhvuong12222',
      mongodb_password: 'Potay1234.',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site'
    }
  }
}

module.exports = nextConfig
