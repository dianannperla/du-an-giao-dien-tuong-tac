const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        use: { loader: 'babel-loader' }
      }
    ]
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
    open: true,  // Option to automatically open the browser
    client: {
      overlay: true  // Show errors in overlay
    }
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};