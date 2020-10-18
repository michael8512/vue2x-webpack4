'use strict'
const path = require('path');
const fs = require('fs-extra');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const [TARGET, clientItem] = [process.env.npm_lifecycle_event, process.argv[2]];

const vueLoader = {
  dev: "vue-style-loader",
  build: {
    loader: MiniCssExtractPlugin.loader,
    options: {
      publicPath: '../',
      hmr: TARGET == 'build', // 仅dev环境启用HMR功能
    }
  },
  dll: MiniCssExtractPlugin.loader,
};

const getIPAdress = () => {
  var interfaces = require('os').networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
}

module.exports = {
  vueLoader: vueLoader[TARGET],
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/': {
        target: 'https://www.690699.com/',  // 接口域名
        changeOrigin: true,  //是否跨域
        // pathRewrite: {
        //   '^/apis': ''   //需要rewrite重写的,
        // }              
      }
    },
    port: 8088,
    devServer: getIPAdress() || 'localhost',
    getIPAdress: getIPAdress,
    host: 'localhost', // can be overwritten by process.env.HOST
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    useEslint: true,
    showEslintErrorsInOverlay: false,
    devtool: 'cheap-module-eval-source-map',
    cacheBusting: true,
    cssSourceMap: true,
  },

  build: {
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: true,
    devtool: '#source-map',
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report,
  }
}