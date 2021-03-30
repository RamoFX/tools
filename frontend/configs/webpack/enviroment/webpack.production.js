const { optimize: { AggressiveMergingPlugin } } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new AggressiveMergingPlugin()
  ]
}
