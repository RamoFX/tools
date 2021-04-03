const { path } = require('./utils.js')
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin')

const env = process.argv[process.argv.length - 1]

module.exports = {
  entry: path('source/index.tsx'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ],
              plugins: [
                '@babel/plugin-proposal-class-properties'
              ]
            }
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: path('configs/tsconfig.json'),
              transpileOnly: env === 'development'
            }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          env === 'development' ? 'style-loader' : miniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: '[name].bundle-[contenthash].css'
    }),
    new htmlWebpackPlugin({
      template: path('source/index.html'),
      favicon: path('source/assets/favicon.ico')
    }),
    new CleanTerminalPlugin({
      beforeCompile: true
    })
  ],
  resolve: {
    extensions: [
      '.js', '.ts',
      '.jsx', '.tsx',
      '.css', '.scss'
    ],
    alias: {
      '@assets': path('source/assets'),
      '@containers': path('source/components/containers'),
      '@elements': path('source/components/elements'),
      '@layouts': path('source/components/layouts'),
      '@pages': path('source/components/pages'),
      '@parts': path('source/components/parts'),
      '@scripts': path('source/modules/scripts'),
      '@styles': path('source/modules/styles')
    }
  }
}
