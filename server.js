var http = require('http'); //includes the http module
console.log('starting');
var port = 17500;
var x = 10;
var y = x*100;]

function onRequest(request, response){
	console.log("A User has made a request" + request.url);
	response.writeHead(200,{"Context-Type":"text/plain"});
	response.write("Hello world " + y);
	response.end();
}

http.createServer(onRequest).listen(8888);
console.log("server is now running")