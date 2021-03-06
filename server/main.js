var express = require('express');
var app = new express();
var parser = require('body-parser');
require('./database/database.js');


app.get('/', function(req, res){
	res.render('./../app/index.ejs', {
		
	});
})
//.use(express.static(__dirname + '/../app'))	/* use for debugging */
.use(express.static(__dirname + '/../.disk'))	/* use for production */
.listen(7777);

app.use(parser.json());
app.use(parser.urlencoded({
	extended: false
}));

require('./routes/items')(app);
