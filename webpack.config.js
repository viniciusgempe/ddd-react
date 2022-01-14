const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  entry: './src/main/index.js',
  output: {
    path: path.join(__dirname, 'public/js'),
    publicPath: '/public/js',
    filename: 'bundle.js'
  },
  resolve: {
      extensions: ['.js', '.tsx', 'ts'],
      alias: {
        '@': path.join(__dirname, 'src'),
      }
  },
  devServer: {
    contentBase: './public',
    writeToDisk: true,
    historyApiFallback: true,
  },
  externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
  },
  pluglins: [
    new CleanWebpackPlugin(),
  ]
})