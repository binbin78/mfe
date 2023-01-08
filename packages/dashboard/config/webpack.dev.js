const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require ('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require ('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3300/'
  },
  devServer: {
    port: 3300,
    historyApiFallback: {
      index: '/index.html',
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
    
  },
  plugins: [
    new ModuleFederationPlugin({
        name: 'dashboard',
        filename: 'remoteEntry.js',
        exposes: {
           './Dashboard': './src/bootstrap'
        },
        shared: packageJson.dependencies,
    })
  ],
};

module.exports = merge(commonConfig, devConfig);
