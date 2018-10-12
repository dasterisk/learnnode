var port = process.argv[2];
var location = process.argv[3];

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){

	var readable = fs.createReadStream(location);
	readable.pipe(res);
	})
	server.listen(port);