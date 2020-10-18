const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const merge = require('webpack-merge');
const utils = require('./utils')
const path = require('path')
const webpackbase = require('./webpack.base.conf.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const chalk = require('chalk');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const config = require('../config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const _version = new Date().getTime();
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const dllHelper = require('../config/dllHelper');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const HappyPack = require('happypack');

const webpackProdConfig = {
  devtool: 'inline-cheap-source-map',
  mode: 'production',
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: './'
  },
  optimization: {
    noEmitOnErrors: true,
    minimizer: [
      // new UglifyJsPlugin({
      //   cache: true,
      //   parallel: true,
      //   sourceMap: false // set to true if you want JS source maps
      // }),
      new OptimizeCssAssetsPlugin({
        cssProcessor: require('cssnano')
      })
    ],
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new ExtractTextPlugin({
    //   filename: utils.assetsPath('css/[name].[contenthash].css'),
    //   allChunks: true,
    // }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: true
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: 'static',
        ignore: ['.*']
      }
    ]),

    ...dllHelper.genDllReferences(),
    new HappyPack({
      id: 'js',
      use: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
        },
      ]
    }),
    new HtmlWebpackTagsPlugin({
      assets: dllHelper.loadDllAssets(),
      append: false
    }),
    new HtmlWebpackPlugin({
      filename: process.env.NODE_ENV === 'testing'
        ? 'index.html'
        : config.build.index,
      template: 'index.html',
      // favicon:path.resolve('favicon.ico'),
      prod: true,
      hash: true,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeComments: true,
        removeEmptyAttributes: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: utils.assetsPath(`css/[name].${_version}.css`),
      chunkFilename: utils.assetsPath(`css/[name].${_version}.css`),
    }),
    new ProgressBarPlugin(
      {
        format: chalk.blueBright(' build :bar :percent (:elapsed seconds) '),
        clear: false,
        summary: false,
        customSummary: res => {
          process.stderr.write(chalk.blueBright.bold(` build end use time ${res} \n`))
        }
      }
    ),
    // new ParallelUglifyPlugin({
    //   uglifyJS: {
    //     output: {
    //       beautify: false,
    //       comments: false
    //     },
    //     compress: {
    //       drop_console: true,
    //       collapse_vars: true,
    //       reduce_vars: true
    //     }
    //   }
    // })
  ]
}

// if (config.build.productionGzip) {
//   const CompressionWebpackPlugin = require('compression-webpack-plugin')

//   webpackProdConfig.plugins.push(
//     new CompressionWebpackPlugin({
//       filename: '[path].gz[query]',
//       algorithm: 'gzip',
//       test: new RegExp(
//         '\\.(' +
//         config.build.productionGzipExtensions.join('|') +
//         ')$'
//       ),
//       threshold: 10240,
//       minRatio: 0.8
//     })
//   )
// }

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackProdConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = merge(webpackbase, webpackProdConfig)