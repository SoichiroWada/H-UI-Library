const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },

  devServer: {
    host: '0.0.0.0',
    port: 8080,

    static: {
      directory: path.resolve(__dirname, 'dist')
    },

    devMiddleware: {
      publicPath: '/assets/'
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,

        use: {
          loader: 'babel-loader',

          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};