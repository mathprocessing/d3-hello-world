const path = require('path');

module.exports = {
  mode: "development", // "development", "production", "none"
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
   publicPath: '/js/',
    path: path.resolve(__dirname, 'public/js')
  },
  devServer: {
   hot: false,
   inline: false,
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000
  },
  plugins: [
  ]
};
