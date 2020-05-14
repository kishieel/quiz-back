const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./app/routes/api.js");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Quiz aplication : Welcome!" });
});

routes(app);

app.listen(3000, () => {
	console.log("Server is running on port 3000.");
});
