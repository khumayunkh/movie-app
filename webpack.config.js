const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const HTMLPlugin2 = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry: ['./src/router/router.js', './src/app.js'],
    output: {
        filename: 'bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'public')
    },
    devServer:{
        port: 3000
    },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template : './src/index.html',
            chunks: ['main']
        }),
        new HTMLPlugin({
          filename: 'login.html',
          template : './src/Login/login.html',
          chunks: ['exampleEntry']
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
    
}