const external = require('webpack-node-externals')
const { merge } = require('webpack-merge')

const baseOptions = require('./webpack.base')

module.exports = merge(baseOptions, {
  devtool: "hidden-source-map",
  entry: "./src/server",
  output: {
    filename: 'server.js'
  },
  externalsPresets: { node: true },
  externals: [external()],
})
