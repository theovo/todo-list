const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true, // keeps output folder clean: empty out the folder, bundles files into it
    },
    plugins: [
        new HtmlWebpackPlugin({ // bundles html into output folder, adds script tags to html
            template: "./src/template.html", // do not use script tags in html head
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"], // reads css as a string, injects js to apply styles to page, loads images from css
            },  // do not use link tags in html head, import css to js instead
            {
                test: /\.html$/i,
                loader: "html-loader", // loads images from html
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource", // loads images from js (that have been imported to js)
            },
        ],
    },
};