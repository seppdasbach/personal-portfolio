const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

const rootDir = path.resolve(__dirname);
const srcDir = path.resolve(__dirname, 'src');
const appEntry = path.resolve(srcDir, 'index.js');
const output = path.resolve(__dirname, 'dist');

const progressPlugin = new ProgressBarPlugin();

const htmlPlugin = new HtmlWebpackPlugin({
    template: path.resolve(srcDir, 'index.html')
});

const babelLoader = {
    test: /\.jsx?$/,
    include: [srcDir],
    loader: 'babel-loader'
};

const fileLoader = {
    test: /\.(jpe?g|png|gif|svg|ttf|woff|woff2)$/i,
    loader: 'file-loader',
    query: {
        name: '[name].[ext]'
    }
};

const sassLoader = {
    test: /\.scss$/,
    loaders: ['style', 'css', 'sass']
};

const cssLoader = {
    test: /\.css$/,
    loaders: ['style', 'css']
};

const jsonLoader = {
    test: /\.json$/,
    loader: 'json-loader'
};

//Will turn on when deployed
const extractTextPlugin = new ExtractTextPlugin('styles.css');

module.exports = {
    entry: [
        appEntry
    ],
    output: {
        path: output,
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            babelLoader,
            fileLoader,
            sassLoader,
            cssLoader,
            jsonLoader
        ]
    },
    plugins: [
        htmlPlugin,
        progressPlugin
    ]
};
