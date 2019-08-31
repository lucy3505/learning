module.exports = {
  entry: __dirname + "/07CSS模块/app/main.js",
  output: {
    path: __dirname + "/07CSS模块/public",
    filename: "bundle.js"
  },
  devtool:"eval-source-map",
  devServer: {
    contentBase: "./07CSS模块/public", //本地服务器所加载的页面所在的目录
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
              // localIdentName:"[name]__[local]___[hash:base64:10]"
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              // localIdentName:'[name]__[local]--[hash:base64:5]'
            }
          }
        ]
      }
    ]
  }
}