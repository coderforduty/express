var express = require('express');
var app = express();
var menuitem = require('./server');

app.use(express.static('public'));
app.use('/menuitem', menuitem);

app.get('/user', function (req, res) {
	res.sendFile('/home/ywj/express/user.html');
});

app.get('/index', function (req, res) {
	res.sendFile('/home/ywj/express/index.html');
});

app.get('/account', function (req, res) {
	res.sendFile('/home/ywj/express/account.html');
});

app.get('/discount', function (req, res) {
	res.sendFile('/home/ywj/express/discount.html');
});

app.listen(8080, function () {
	console.log('running at 8080');
});