const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.ts'),//[bundle] is a bundle's name
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',//this [name]'s depend on entry [bundle] name
    // this [contenthash] will help the caching
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,//auto open browser when npm run dev
    hot: true,//hot reloading
    compress: true,//allow compress
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/,
        type: 'asset/resource',
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/template.html',
    }),
    new BundleAnalyzerPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/assets", to: path.resolve(__dirname, 'dist') },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      exclude: /node_modules/,
    })],
  },
}