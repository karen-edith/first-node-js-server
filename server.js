var http = require('http'); //includes the http module
var prompt = require('prompt');
console.log('starting');
var host = '10.0.0.4';
var port = 17500;

var x = 10;
var y = x*100;

var server = http.createServer(function(request, response){
	console.log('Received request: ' + request.url);
	response.writeHead(200, {'content-type':'text/plain'}); //writing header
	response.write('hello world!'+ y);
	response.end(); // we could do response.end('Hello World!')
}); 

//we need to listen
server.listen(port, host, function(){
 	console.log('listening' + host + ':' + port);

});