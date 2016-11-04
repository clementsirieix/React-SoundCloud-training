var path = require("path"),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, "dist"),
    SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
    entry: [
        SRC_DIR + "/app/index.js",
        SRC_DIR + "/app/style/main.sass"
    ],
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("/main.css", {
            allChunks: true
        })
    ],
    devServer: {
        historyApiFallback: true
    }
};
