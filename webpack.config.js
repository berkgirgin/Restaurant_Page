const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    menu: "./src/menu.js",
    contact: "./src/contact.js",
  },
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: "./src/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      inject: "body",
      template: "./src/html/menu.html",
      filename: "menu.html",
      chunks: ["menu"],
    }),
    new HtmlWebpackPlugin({
      inject: "body",
      template: "./src/html/contact.html",
      filename: "contact.html",
      chunks: ["contact"],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        // options: {
        //   sources: {
        //     list: [
        //       // All default supported tags and attributes
        //       "...",
        //       {
        //         tag: "a",
        //         attribute: "href",
        //         type: "src",
        //       },
        //     ],
        //   },
        // },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
