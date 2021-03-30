const { HotModuleReplacementPlugin } = require('webpack')

module.exports = {
  mode: 'development',
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
