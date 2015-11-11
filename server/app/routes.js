// routes.js
//contains the route configuration of the app

module.exports = function(app) {
	var path = require('path');

	//routes
	app.get('/', function(req, res) {
		res.render('index.html')
	})

}