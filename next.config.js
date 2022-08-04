const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias.g = path.join(__dirname, 'styles/base.scss');
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import 'styles/vars.scss';`
  }
}

module.exports = nextConfig
