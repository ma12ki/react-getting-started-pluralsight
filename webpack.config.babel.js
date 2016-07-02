import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const BUILD_DIR = path.resolve(__dirname, 'build');
const BUILD_DIR_CLIENT = path.resolve(BUILD_DIR, 'client');
//const BUILD_DIR_SERVER = path.resolve(BUILD_DIR, 'server');
const SRC_DIR = path.resolve(__dirname, 'src');
const SRC_DIR_CLIENT = path.resolve(SRC_DIR, 'client');
//const SRC_DIR_SERVER = path.resolve(SRC_DIR, 'server');
const SRC_DIR_APP = path.resolve(SRC_DIR_CLIENT, 'app');

const config = {
  entry: SRC_DIR_APP + '/index.jsx',
  output: {
    path: BUILD_DIR_CLIENT,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      { test : /\.jsx?/, include : SRC_DIR_APP, loader : 'babel' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader:'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      { test: /jquery\.js$/, loader:'expose?jQuery!expose?$'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${SRC_DIR_CLIENT}/index.html`,
      inject: 'body',
      hash: true
    })
  ]
};

export default config;
