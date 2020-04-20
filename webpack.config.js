const path = require("path")
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')


/**
 * First rule: 
 * - test: Regex to select all asset files hat end with .js 
 * - determints that every .js file needs to be run though the bable-loader
 */

module.exports = {
    entry: './src/client/index.js',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "bable-loader"
            },
            {
                test: /(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images'
                }
            }
        ]
    }
}