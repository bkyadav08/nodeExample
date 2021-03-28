var path = require('path')  // we can decompose the path using path module

var p = "/Users/bibekyadav/Documents/nodeDemo/Module1/app.txt"

console.log(path.dirname(p))  // It gives the directory address
console.log(path.basename(p)) // it gives the base name
console.log(path.extname(p))  // it gives the extension name
console.log(path.isAbsolute(p))  // it gives the absolute value


