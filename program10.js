var net = require('net');

var port = process.argv[2];

function time(){
	var date = new Date();

	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var d = date.getDate();
	var hour = date.getHours();
	var minute = date.getMinutes();

	return zeroFill(year) + '-' + zeroFill(month) + '-' + zeroFill(d) + ' ' + 
	zeroFill(hour) + ':' + zeroFill(minute) + '\n';
}

//fill 5 to 05
function zeroFill(i){
	return (i < 10 ? '0' : '') + i;
}

var server = net.createServer(function(socket){
	socket.write(time());
	socket.end();
})
server.listen(port);