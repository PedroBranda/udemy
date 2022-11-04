var express = require('express');
var router = express.Router();
var listener = require('../listener');

/* POST body obj. */
router.post('/', function (req, res, next) {
	// validar token para chamar funcao de autenticacao
	const counters = listener.listen(req.body);
	res.status(200).send({ data: counters });
});

module.exports = router;
