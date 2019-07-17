const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/public",
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
      },
      {
        test: /\.less$/,
        exclude: [/node_modules/],
        use: [
            require.resolve('style-loader'),
            {
                loader: require.resolve('css-loader'),
                options: {
                    importLoaders: 1,
                    modules: true,
                    localIdentName:"[name]__[local]___[hash:base64:10]"
                },
            },
            {
                loader: require.resolve('postcss-loader'),
            },
            {
                loader: require.resolve('less-loader'), // compiles Less to CSS
            },
          ],
        },
        {
          // Exclude `js` files to keep "css" loader working as it injects
          // its runtime that would otherwise processed through "file" loader.
          // Also exclude `html` and `json` extensions so they get processed
          // by webpacks internal loaders.
          // exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
          test: /(\.png|\.eot|\.woff|\.ttf|\.svg)$/,
          loader: require.resolve('file-loader'),
          // options: {
          //   name: 'static/media/[name].[hash:8].[ext]',
          // },
        },
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必纠'),
    new HtmlWebpackPlugin({
      template:__dirname + "/index.tmpl.html" //new 一个这个插件得实例
    }),
    new webpack.HotModuleReplacementPlugin()//热加载插件
  ]
}