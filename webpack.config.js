const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    mode: 'development',
    entry: './src/client/index.js',
    module: {
        //Now, with that loader in place, we should be able to get going
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            //this will go in the html folder in views and create a new html file in the dist folder for us
            //now when you will run the build, you will find a file named html in your dist folder due to this plugin 
            template: "./src/client/views/index.html",
            filename: "./index.html",
        })
    ]
}