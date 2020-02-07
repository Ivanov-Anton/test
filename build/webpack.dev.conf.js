/* Development config:
   ========================================================================== */

const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf")
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  // devServer: {
  //   contentBase: baseWebpackConfig.externals.paths.dist,
  //   port: 8081,
  //   overlay: {
  //     warnings: true,
  //     errors: true
  //   }
  // },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map"
    }),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 4000,
      server: { baseDir: ['dist'] },

    }),
  ]
});

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
