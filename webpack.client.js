const path = require("path");
const webpack = require('webpack')

module.exports = {
  entry: "./client/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "GH_TOKEN": `"${process.env.GH_TOKEN}"`
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  }
};
