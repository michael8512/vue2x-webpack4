const path = require('path')
const webpack = require('webpack');
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const utils = require('./utils')
 
const dllConfig = {
  mode: 'production',
  context: path.resolve(__dirname, '../'),
  output: {
    path: path.join(__dirname, '../static/lib'),
    filename: '[name]_[hash:4].dll.js',
    library: '[name]_[hash:4]'
  },
  entry: {
    lib: [
      'axios',
      'moment',
    ],
    vue: [
      'vue/dist/vue.js',
      'vue-router',
    ],
  },
  // optimization: {
  //   noEmitOnErrors: true,
  //   minimizer: [
  //     new OptimizeCssAssetsPlugin({
  //       cssProcessor: require('cssnano')
  //     })
  //   ],
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },
  module: {
    rules: [{
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff",
      options: {
        name: utils.assetsPath('fonts/[name].[ext]')
      }
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader",
      options: {
        name: utils.assetsPath('fonts/[name].[ext]')
      }
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      context: __dirname,
      path: path.join(__dirname, '../static/dll', '[name].manifest.json'),
      name: '_dll_[name]_[hash]',
    }),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
    }),
    new ExtractTextPlugin('[name].css'),
  ],
  performance: {
    hints: "warning", // 枚举
    maxAssetSize: 30000000, // 整数类型（以字节为单位）
    maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
    assetFilter: function(assetFilename) {
      // 提供资源文件名的断言函数
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  }
}
 
module.exports = merge(dllConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: true,
      extract: true,
      usePostCSS: true
    })
  }
});
