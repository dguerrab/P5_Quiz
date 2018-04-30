var express = require('express');
var router = express.Router();

/* GET crdits. */
router.get('/', function(req, res, next) {
  res.render('credits');
});

module.exports = router;