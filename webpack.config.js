const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");

module.exports = {
  entry: { main: "./src/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/, // регулярное выражение, которое ищет все js файлы
        use: { loader: "babel-loader" }, // весь JS обрабатывается пакетом babel-loader
        exclude: /node_modules/, // исключает папку node_modules
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: "file-loader?name=./vendor/[name].[ext]",
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/,
        use: [
          "file-loader?name=./images/[name].[ext]", // указали папку, куда складывать изображения
          {
            loader: "image-webpack-loader",
            options: {},
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      // Означает, что:
      inject: false, // стили НЕ нужно прописывать внутри тегов
      minify: false, // убрать минификацию
      template: "./src/index.html", // откуда брать образец для сравнения с текущим видом проекта
      filename: "index.html", // имя выходного файла, то есть того, что окажется в папке dist после сборки
    }),
  ],
};
