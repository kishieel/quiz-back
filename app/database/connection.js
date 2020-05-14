const mysql = require("mysql");
const database = require("../config/database.js");

const connection = mysql.createConnection({
	host: database.HOST,
	user: database.USER,
	password: database.PASSWORD,
	database: database.DB
});

connection.connect(error => {
  	if (error) throw error;
	console.log("Successfully connected to the database.");
});

module.exports = connection;
