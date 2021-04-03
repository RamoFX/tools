const { path } = require('../utils.js')
const { optimize: { AggressiveMergingPlugin } } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  output: {
    path: path('production/'),
    filename: '[name].bundle-[contenthash].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new AggressiveMergingPlugin()
  ]
}
