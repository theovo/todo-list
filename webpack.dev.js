const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "development",
    devtool: "eval-source-map", // references error messages from development code and not production code
    devServer: { // watches js for changes, bundles files into output folder
        watchFiles: ["./src/template.html"], // watches html for changes
    },
});