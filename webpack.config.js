'use strict'

const CopyWebPackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'ElectroneumUtils.js',
    library: 'ElectroneumUtils',
    libraryTarget: 'umd'
  },
  node: {
    fs: 'empty'
  },
  target: 'web',
  plugins: [
    new CopyWebPackPlugin([
      { from: 'lib/electroneum-crypto/electroneum-crypto-wasm.js', to: 'electroneum-crypto-wasm.js' }
    ])
  ]
}
