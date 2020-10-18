const webpack = require("webpack");
const webpackConfig = require("./webpack.dev.conf.js");
let WebpackDevServer = require('webpack-dev-server');
let config = require('../config');

const compiler = webpack(webpackConfig);
const devServerOptions = Object.assign({}, webpackConfig.devServer);
const server = new WebpackDevServer(compiler, devServerOptions);


server.listen(config.dev.port, config.dev.host, res => {});