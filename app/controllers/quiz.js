const Quiz = require("../models/quiz.js");

exports.create = (req, res) => {
	return
};

exports.update = (req, res) => {
	return
};

exports.remove = (req, res) => {
	return
};

exports.getRandom = (req, res) => {
	Quiz.getRandom( req.query.limit, (err, data) => {
		if (err) {
			res.status(500).send({
				message: "Internal server error - try again later or contact with support",
				details: err
			});
		} else  {
			res.send(data);
		}
	})
};
