const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log("__dirname", __dirname);
console.log("path.resolve()", path.resolve());
console.log("path.resolve(__dirname, 'dist')", path.resolve(__dirname, "dist"));

module.exports = (env) => {
  const isDevelopment = Boolean(env.development);
  return {
    mode: isDevelopment ? "development" : "production",
    entry: {
      app: path.resolve("src/index.js"),
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[contenthash].js",
      clean: true,
    },
    devtool: isDevelopment ? "source-map" : false,
    module.exports = {
      //...
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        clean: true,
        assetModuleFilename: "[file]",
      },
      module: {
        rules: [
          {
            test: /\.(png|svg|jpg|jpeg|gif|pdf)$/i,
            type: "asset/resource",
          },
        ],
      },
    };
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
      }),
      new HtmlWebpackPlugin({
        title: "Webpack App",
        filename: "index.html",
        template: "src/template.html",
      }),
    ],
    devServer: {
      static: {
        directory: "dist", // Đường dẫn tương đối đến với thư mục chứa index.html
      },
      port: 3000, // Port thay cho port mặc định
      open: true, // Mở trang webpack khi chạy terminal
      hot: true, // Bật tính năng reload nhanh Hot Module Replacement
      compress: true, // Bật Gzip cho các tài nguyên
      historyApiFallback: true, // Set true nếu bạn dùng cho các SPA và sử dụng History API của HTML5
    },
  };
};
