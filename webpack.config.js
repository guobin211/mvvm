const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    about: './src/about.js'
  },
  output: {
    publicPath: '/',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*']),
    new HtmlWebpackPlugin({
      title: 'Webpack APP',
      template: './src/index.html',
      favicon: false,
      minify: false,
    }),
    new HtmlWebpackPlugin({
      title: 'about',
      template: './src/about.html',
      favicon: false,
      minify: false,
    }),
  ],
}