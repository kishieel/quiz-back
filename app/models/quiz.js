const mysql = require('../database/connection.js')

const Quiz = function( quiz ) {
	this.question = quiz.question;
	this.answer_a = quiz.answer_a;
	this.answer_b = quiz.answer_b;
	this.answer_c = quiz.answer_c;
	this.answer_d = quiz.answer_d;
	this.correct_answer = quiz.correct_answer;
}

Quiz.create = ( quiz, result ) => {
	mysql.query(" INSERT INTO questions SET ? ", quiz, (err, res) => {
		if( err ) {
			result(err, null);
			return;
		}

		result(null, { id: res.insertId, ...quiz });
	})
}

Quiz.update = ( quiz, result ) => {
	mysql.query("UPDATE questions SET question = ?, answer_a = ?, answer_b = ?, answer_c = ?, answer_d = ?, correct_answer = ? WHERE id = ?",
	[quiz.question, quiz.answer_a, quiz.answer_b, quiz.answer_c, quiz.answer_d, quiz.correct_answer, quiz.id],
	(err, res) => {
		if( err ) {
			result(err, null)
			return;
		}

		if( res.affecedRow == 0 ) {
			result({ status: "not_found" }, null)
			return;
		}

		result(null, ...quiz)
	})
}

Quiz.remove = ( quiz, result ) => {

}

Quiz.getRandom = ( limit = 1, result ) => {
	mysql.query(" SELECT * FROM questions ORDER BY RAND() LIMIT ? ", [ parseInt(limit) ], (err, res) => {
		if( err ) {
			result(err, null);
			return;
		}

		result(null, res)
	})
}

module.exports = Quiz;
