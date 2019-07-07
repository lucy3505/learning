module.exports = {
  entry: __dirname + "/app/main.js",
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
      }
    ]
  }
}