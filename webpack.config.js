const path = require("path")
const webpack = require('webpack')


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
            }
        ]
    }
}