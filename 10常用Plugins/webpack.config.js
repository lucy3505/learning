const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: __dirname + "/app/main.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  devtool:"eval-source-map",
  devServer: {
    contentBase: "./public", //本地服务器所加载的页面所在的目录
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
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            }
          },{
            loader:"postcss-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必纠'),
    new HtmlWebpackPlugin({
      template:__dirname + "/app/index.tmpl.html" //new 一个这个插件得实例
    }),
    new webpack.HotModuleReplacementPlugin()//热加载插件
  ]
}
