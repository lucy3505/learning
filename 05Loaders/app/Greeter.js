
var config = require('./config.json')
module.exports = ()=>{
  var greet = document.createElement("div")
  greet.textContent=config.greetText
  return greet
}