<<<<<<< HEAD
module.exports = {
  entry: __dirname + "/07CSS模块/app/main.js",
  output: {
    path: __dirname + "/07CSS模块/public",
=======

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: __dirname + "/10常用Plugins/app/main.js",
  output: {
    path: __dirname + "/10常用Plugins/build",
>>>>>>> afd3df44392b2fc9543b8b65fc70de9db9179157
    filename: "bundle.js"
  },
  devtool:"eval-source-map",
  devServer: {
<<<<<<< HEAD
    contentBase: "./07CSS模块/public", //本地服务器所加载的页面所在的目录
=======
    contentBase: "./10常用Plugins/public", //本地服务器所加载的页面所在的目录
>>>>>>> afd3df44392b2fc9543b8b65fc70de9db9179157
    historyApiFallback:true,//不跳转
    inline:true//实时刷新
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use:[
          {
            loader:"style-loader"
          },{
            loader:"css-loader",
            options:{
              modules:true,
<<<<<<< HEAD
              // localIdentName:"[name]__[local]___[hash:base64:10]"
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              // localIdentName:'[name]__[local]--[hash:base64:5]'
            }
=======
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            }
          },{
            loader:"postcss-loader"
>>>>>>> afd3df44392b2fc9543b8b65fc70de9db9179157
          }
        ]
      }
    ]
<<<<<<< HEAD
  }
=======
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必纠'),
    new HtmlWebpackPlugin({
      templat:__dirname + "/10常用Plugins/app/index.tmpl.html" //new 一个这个插件得实例
    }),
    new webpack.HotModuleReplacementPlugin()//热加载插件
  ]
>>>>>>> afd3df44392b2fc9543b8b65fc70de9db9179157
}