const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true // Automatically clean the output folder before each build
  },
  module: {
    rules: [
      {
        test: /.jsx?$/, 
        exclude: /node_modules/, 
        use: { loader: 'babel-loader' }
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    hot: true,
    open: true,  // Option to automatically open the browser
    client: {
      overlay: true,  // Show errors in overlay
      progress: true  // Show build progress in the browser
    },
    historyApiFallback: true // Enable support for HTML5 history API
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};