var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//   res.send('esta es la lista de precios');
    res.render('precios'); //view/precios.hbs
});

module.exports = router;