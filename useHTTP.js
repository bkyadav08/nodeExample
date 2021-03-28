var http = require('http')
var chalk = require('chalk')


http.createServer(function(req,res){       //createServer is a method that creates a server which executes a function(req,res)


        //here we write the header of the response
    res.writeHead(200,{'Content-Type' : 'text/plain'})  // What we want to do we have to write in this response object
    res.write(chalk.green('Hello World'))      // What we want to do , we write in a response object
    res.end()                                                   // 200 is the status I am passing


}).listen(6060) // Here it listen at particular port


