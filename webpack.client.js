const path = require('path')

const { merge } = require('webpack-merge')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const baseOptions = require('./webpack.base')

module.exports = merge(baseOptions, {
  devtool: "source-map",
  entry: "./src/client",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "js/bundle.[hash:5].js"
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
          '**/*',
          '!favicon.ico'
      ]
    })
  ]
})
