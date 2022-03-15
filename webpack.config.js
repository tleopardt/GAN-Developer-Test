const path = require('path');
const webpack = require( 'webpack' );
const dotenv = require('dotenv').config({ path: __dirname + '/.env' });
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: ['babel-polyfill','./src/index.js'],
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(dotenv.parsed)
        })
    ],
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        disableHostCheck: true
    }
}