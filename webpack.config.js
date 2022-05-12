const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve("./client/index.js"),
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "build.js",
  },
  plugins: [
    new NodePolyfillPlugin(),
    new HtmlWebpackPlugin({
      title: "dev server app",
      template: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/proposal-class-properties"],
        },
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.s(c|a)ss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  devServer: {
    static: {
      publicPath: "/build",
      directory: path.join(__dirname, "build"),
    },
    port: 8080,
    proxy: {
      "*": { target: "http://localhost:3000" },
      changeOrigin: true,
    },
  },
  // module: {
    // rules: [
    //   {
    //     test: /\.js$/,
    //     enforce: "pre",
    //     use: ["source-map-loader"],
    //   },
    // ],
  // },
};
