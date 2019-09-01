var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/down', async (req, res) => {
	try{
		request(req.body.file).pipe(res)
	}catch (e) {
		res.send({result: null, error: e.stack});
	}
});

module.exports = router;
