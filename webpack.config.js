const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),//[bundle] is a bundle's name
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',//this [name]'s depend on entry [bundle] name
  },
}