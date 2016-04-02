var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	
	console.log(req.app.locals.json);
  	res.render('index', {
		//datajson:JSON.stringify(req.app.locals.json
		datajson:req.app.locals.json
  	});
});

module.exports = router;
