var myData = require("./mydata");
var http = require('http');
		http.createServer(onRequest).listen(8888);
			function onRequest(request, response) {
			response.writeHead(200, { "Content-type": "text/plain" });
			response.write(myData.random());
			response.end();
		}

