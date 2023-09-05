/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.ts'),
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    publicPath: '',
    libraryTarget: 'umd',
    library: '@bytel/trilogy-react-ts',
    path: path.resolve(__dirname, 'lib'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.d.ts', '.ttf', '.png'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, 'tsconfig.json')
      })
    ],
    alias: {
      'react-native$': 'react-native-web',
    },
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js)?$/,
        loader: require.resolve('ts-loader'),
        exclude: /node_modules/
      },
    ],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'react-router-dom': 'react-router-dom',
  },
}
