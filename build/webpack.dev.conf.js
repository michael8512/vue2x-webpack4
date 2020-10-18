const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const webpackbase = require('./webpack.base.conf.js');
const webpack = require('webpack');
const merge = require('webpack-merge');
let config = require('../config');
const chalk = require('chalk');
const NodemonPlugin = require('nodemon-webpack-plugin');


let webpackDevConfig = {
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    open: false,
    contentBase: config.dev.outPath,
    publicPath: "/",
    hot: true,
    noInfo: true,
    port: config.dev.port,
    host: config.dev.host,
    historyApiFallback: {
			index: '/index.html' //与output的publicPath有关(HTMLplugin生成的html默认为index.html)
		}
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [
          chalk.cyan.bold('Your application is running here: ') + chalk.greenBright.bold(`http://${config.dev.devServer}:${config.dev.port}/`),
          chalk.cyan.bold('Your application is running here: ') + chalk.greenBright.bold(`http://localhost:${config.dev.port}/`)
      ]
      }
    }),
    new ProgressBarPlugin(
      {
        format: chalk.blueBright('  build :bar :percent (:elapsed seconds) '),
        clear: true,
        summary: false,
        customSummary: res => {
          process.stderr.write(chalk.blueBright('   '))
        }
      }
    ),
    // new NodemonPlugin()
  ]
}

module.exports = merge(webpackbase, webpackDevConfig)