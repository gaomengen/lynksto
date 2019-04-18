// next.config.js
const withCSS = require('@zeit/next-css');
const path = require('path');

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  webpack: (config) => {

      return config;
  }
})


