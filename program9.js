var http = require('http');
var bl = require('bl');

var count = 0;
var results = [];

for(var i = 0; i < 3; i++){
	httpGet(i);	
}

function httpGet(i){
	var url = process.argv[i + 2];
	http.get(url, function(res){
		res.pipe(bl(function(err,data){
			if(err){
				return console.error(err);
			}
			results[i] = data.toString();
			count ++;
			if(count === 3){
				printRes();
			}
		}))	
	})
}

function printRes(){
	for(var i = 0; i < 3; i++){
		console.log(results[i]);
	}
}