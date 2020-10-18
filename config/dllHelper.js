const webpack = require("webpack");
const path = require('path');
const fs = require('fs');
const dllConfig = require('../build/webpack.dll.conf');

function genDllReferences() {
  return Object.keys(dllConfig.entry).map(
    name=>(
      new webpack.DllReferencePlugin({
        manifest: require(path.join(
          __dirname,
          '../static/dll',
          `${name}.manifest.json`
        ))
      })
    )
  )
}

function loadDllAssets() {
  return fs
    .readdirSync(path.resolve(__dirname, '../static/dll'))
    .filter(filename => filename.match(/.dll.js$/))
    .map(filename => `dll/${filename}`);
}

module.exports = {
  loadDllAssets,
  genDllReferences
}