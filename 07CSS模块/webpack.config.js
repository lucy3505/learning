module.exports = {
  entry:__dirname + '/app/main.js',
  output:{
    filename:"bundle.js",
    path: __dirname + '/public'
  },
  devtool:"eval-source-map",
  devServer:{
    contentBase:"./public",
    historyApiFallback:true,
    inline:true
  },
  module:{
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use:{
          loader:"babel-loader"
        },
        exclude:/node_modules/
      },
      {
        test:/\.css$/,
        use:[
          {
            loader:"style-loader"
          },{
            loader:"css-loader",
            options:{
              modules:true,//指定启用css modules
              localIdentName:'[name]__[local]--[hash:base64:5]'//执行css类名格式
            }
          }
        ]
      }
    ]
  }
}