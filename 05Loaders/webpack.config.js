module.exports = {
  entry: __dirname + "/app/main.js",
  output:{
    path:__dirname + "/public",
    filename:"bundle.js"
  },
  devtool:"eval-sourcer-map",
  devServer: {
    contentBase: "./public",
    historyApiFallback:true,
    inline:true
  },
  module:{
    
  }
  
}