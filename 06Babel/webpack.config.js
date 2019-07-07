module.exports = {
  entry:__dirname + "/app/mian.js",
  output: {
    filename:"bundle.js",
    path:__dirname + "/public"
  },
  devtool:"eval-source-map",
  devServer: {
    contentBase: "./public",
    hustoryApiFallback:true,
    inline:true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
          
        },
        exclude: /node_modules/
      }
    ]
  }
}