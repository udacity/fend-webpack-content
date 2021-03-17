const path = require("path");
const webpack = require("webpack");
module.exports = {
  mode: "development",
  entry: "./src/client/index.js",
  module: {
    rules: [
      {
        test: "/.js$/",
        exclude: /node_modules/,
        loader: "babel/loader",
      },
    ],
  },
};
