import * as path from "path";
import * as webpack from "webpack";
import * as htmlWebpackPlugin from "html-webpack-plugin";

let config: webpack.Configuration = {
  mode: "development",
  context: path.resolve(__dirname),
  entry: {
    index: "./src/index"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js"
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|gif|jpg)$/,
        loader: "file-loader"
      },
      {
        test: /\.tsx?$/,
        loaders: ["ts-loader"]
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader",
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  plugins: [new htmlWebpackPlugin()],
  devServer: {
    port: 9000,
    open: true,
    publicPath: "/"
  }
  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM"
  // }
};

export default config;
