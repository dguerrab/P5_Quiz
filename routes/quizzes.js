var express = require('express');
var router = express.Router();
var {models} = require('../models');

/* GET quizzes. */
router.get('/', function(req, res, next) {
	models.quiz.findAll()
	.then(quizzes => {
		res.render('quizzes', { quizzes });		
	});
});

module.exports = router;