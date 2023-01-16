const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: [{'/' :'./src/app.js'}, {'/login': './src/Login/login.js'}],
    output: {
        filename: 'bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        port: 3000
    },
    plugins: [
        new HTMLPlugin({
          template: 'src/index.html',
          filename: 'index.html',
          chunks: ['main'],
          inject: true
        }),
        new HTMLPlugin({
          template: './src/Login/login.html',
          filename: 'login.html',
          chunks: ['login'],
          inject: true
        }),
        new CleanWebpackPlugin()
      ],
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-proposal-object-rest-spread']
              }
            }
          }
        ],
    },
}