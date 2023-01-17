const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

pages = ['index', 'Login/login', 'SignUp/signUp']

module.exports = {
    entry: pages.reduce((config, page) => {
      config[page] = `./src/${page}.js`;
      return config;
    }, {}),
    output: {
        filename: 'bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'public'),
        clean: true
    },
    devServer: {
        port: 3000
    },
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
    plugins: [].concat(
      pages.map(
        (page) =>
          new HTMLPlugin({
            inject: true,
            template: `src/${page}.html`,
            filename: `${page}.html`,
            chunks: [page],
          })
      ),
    ),
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.html$/,
            loader: 'html-loader'
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