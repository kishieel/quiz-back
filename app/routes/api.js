module.exports = app => {
	const quiz = require("../controllers/quiz.js")

	app.get("/questions", quiz.getRandom )
}
