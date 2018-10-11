var mymodule = require('./program6_1.js');

var folder = process.argv[2];
var ext = process.argv[3];

mymodule(folder, ext, function(err, files){
	if(err){
		return console.log(err);
	}else{
		files.forEach(function(file){
			console.log(file);
		})
	}
})