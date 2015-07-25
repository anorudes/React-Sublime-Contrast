var path = require('path');
var webpack = require('webpack');

module.exports = {
  //devtool: 'eval',
  devtool: 'source-map'  
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/react/index.js'
  ],
  target: "node-webkit",
  output: {
    path: __dirname + "/js",
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,      
      loaders: ['react-hot', 'babel?stage=0&plugins=jsx-control-statements/babel'],        
      include: path.join(__dirname, 'src/react/')
    }]
  }
};
