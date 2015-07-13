var models = require('../models/models.js');

//Autoload

exports.load = function (req, res, next, quizId){
	models.Quiz.find(quizId).then(
		function(quiz){
			if (quiz){
				req.quiz = quiz;
				next();
			}
			else{ next(new Error('No existe quizID='+quizId));}
		}
	).catch(function(error){next(error);});
};


//GET Quizes
exports.index = function (req, res){
	models.Quiz.findAll().then(
		function(quizes){
		res.render('quizes/index',{quizes:quizes});
	}).catch(function(error){next(error);})
};

//GET /quizes/:id
exports.show = function(req, res){
		res.render('quizes/show', {quiz: quiz});
};

//GET /quizes/:id/answer
exports.answer = function(req, res){
	var resultado = 'incorrecto';
			if (req.query.respuesta === req.quiz.respuesta){
				resultado = 'Correcto';
			}
				res.render('quizes/answer', {quiz: req.quiz, respuesta: resultado});
	}
