var http = require('http');
var url = require('url');

var ports = process.argv[2];

var server = http.createServer(function(req, res){
	var parsedUrl = url.parse(req.url,true);
	
	var date = new Date(parsedUrl.query.iso);
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	
	var parseTime = {
			"hour": hours,
			"minute": minutes,
			"second": seconds
	};
	
	var unixTime = {"unixtime": date.getTime()};

	res.writeHead(200, { 'Content-Type': 'application/json' })

	if(parsedUrl.pathname === "/api/parsetime"){
		res.write(JSON.stringify(parseTime));
	}else{
		res.write(JSON.stringify(unixTime));
	}
	res.end();
});

server.listen(ports);