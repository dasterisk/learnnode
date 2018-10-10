var fs = require('fs');
var file = process.argv;
console.log(file);
fs.readdir(file[2], function(err, list){
	if(err){
		console.log(err);
	}
	for(var i = 0; i < list.length; i++){
		console.log(list);
		if (list[i].extname() == 'txt') {
			console.log(list[i]);
		}
	}
});