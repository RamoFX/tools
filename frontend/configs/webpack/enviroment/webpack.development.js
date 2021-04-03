const { path } = require('../utils.js')
const { HotModuleReplacementPlugin } = require('webpack')

module.exports = {
  mode: 'development',
  output: {
    path: path('production/'),
    filename: '[name].bundle-dev.js'
  },
  cache: true,
  devtool: 'source-map',
  devServer: {
    port: 8080,
    hot: true,
    inline: true,
    publicPath: '/',
    historyApiFallback: true
  },
  plugins: [
    new HotModuleReplacementPlugin()
  ]
}
