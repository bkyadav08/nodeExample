//Importing a module
var os = require('os') // This is ES5 syntax
                        // require is a keyword followed by round braces and within quotes,
                        // we write the name of module we need to import i.e. 'os'
                        // require is an import statement that import the module

//import {os} from 'os' // way of importing in ES6 // node engine doesnot accept this.


console.log('platform',os.platform()) //comma(,) means concatinate  // darwin platform
console.log('Architecture',os.arch()) // we can use + symbol or comma (,)  // 64 bit architecture
