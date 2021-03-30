const { merge } = require('webpack-merge')

const configs = {
  base: require('./webpack.base.js'),
  development: require('./enviroment/webpack.development.js'),
  production: require('./enviroment/webpack.production.js')
}

try {
  module.exports = merge(configs.base, configs[process.argv[process.argv.length - 1]])
} catch (e) {
  throw new Error(`No webpack config has been found for "${ process.env.NODE_ENV }" enviroment!`)
}
