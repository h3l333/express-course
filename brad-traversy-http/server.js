const express = require("express");
const path = require("path");

const app = express();

app.use(
	express.json(),
); /* Convert incoming JSON data into JS objects and make it available in req.body
Parses requests bodies with Content-Type: application/json*/
app.use(
	express.urlencoded({ extended: false }),
); /* Convert request bodies which header is set to
Content-type: application/x-www-form-urlencoded */

/* app.get("/", (req, res) => {
	//res.send("Hello from Express");
	//res.send(req.header("host"));
}); */

app.post("/contact", (req, res) => {
	//res.send(req.body);
	if (!req.body.name) {
		return res.status(400).send("Invalid");
	}
});

app.post("/login", (req, res) => {
	if (!req.header("x-auth-token")) {
		return res.status(400).send("No token");
	}

	if (req.header("x-auth-token") !== "1234") {
		return res.status(401).send("Unauthorised");
	}

	res.send("Logged in");
});

app.put("/post", (req, res) => {
	res.json({
		id: req.query.id,
		title: req.body.title,
	});
});

app.listen(5000, () => console.log(`Server started on 5000`));
