import * as path from "path";
import * as webpack from "webpack";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as CleanWebpackPlugin from "clean-webpack-plugin";
import * as UglifyjsWebpackPlugin from "uglifyjs-webpack-plugin"; // 摇树优化

let config: webpack.Configuration = {
  mode: "development",
  // mode: "production",
  context: path.resolve(__dirname),
  entry: {
    index: "./src/index"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    // pathinfo: true,
    filename: "[name].[chunkhash].js",
    // chunkFilename: "[chunkhash].js",
    // hashDigest: 'hex',
    // hashDigestLength: 20,
    publicPath: ""
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"]
  },
  module: {
    // noParse: /react/,
    rules: [
      { test: /\.(woff|woff2|eot|ttf|otf|png|gif|jpg)$/, loader: "file-loader" },
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.less$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "less-loader" }]
      },
      {
        test: /\.xml$/,
        loader: "xml-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new UglifyjsWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack 4.5.0",
      template: "./src/index.html"
    })
  ],
  devtool: "inline-source-map",
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
