var express = require('express');
var fs = require('fs');

router = express.Router();

router.get('/', function (req, res) {
	fs.readFile("./menuitem.json", function (err, data) {
		if (!err) {
			var json = JSON.parse(data);
			res.set("Access-Control-Allow-Origin", "*");
			res.status(200).jsonp(json);
		}
	});
});

module.exports = router;