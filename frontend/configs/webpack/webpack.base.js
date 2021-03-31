const { join } = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

const path = (...paths) => join(__dirname, '../../', ...(paths || []))
const env = process.argv[process.argv.length - 1]

module.exports = {
  entry: path('source/index.tsx'),
  output: {
    path: path('production/'),
    filename: '[name].bundle-[contenthash].js'
  },
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
      '@components': path('source/components'),
      '@data': path('source/data'),
      '@modules': path('source/modules'),
      '@serviecworker': path('source/serviecworker')
    }
  }
}
