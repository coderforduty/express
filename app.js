var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/user', function (req, res) {
	res.sendFile('/home/ywj/express/user.html');
});

app.get('/index', function (req, res) {
	res.sendFile('/home/ywj/express/index.html');
});

app.listen(8080, function () {
	console.log('running at 8080');
});