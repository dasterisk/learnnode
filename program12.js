var map = require('through2-map');
var http = require('http');

var ports = process.argv[2];

var server = http.createServer(function(req, res){
	if(req.method !== 'POST'){
		res.end('send me a Post\n');
	}
	
	req.pipe(map(function(chunk){
		return chunk.toString().toUpperCase();
		})).pipe(res);
	})
	server.listen(ports);