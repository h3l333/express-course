import colors from "colors"; // Import module to style console output with colors

const logger = (req, res, next) => {
	// Define a function that takes in a request object, response object and next function
	const methodColors = {
		GET: "green",
		POST: "blue",
		PUT: "yellow",
		DELETE: "red",
	}; // Map methods to different colors

	const color = methodColors[req.method] || white; // Assign a color depending on the incoming method

	console.log(
		`${req.method} ${req.protocol}.//${req.get("host")}${req.originalUrl}`[
			color
		],
	); /* Log the string corresponding to the request's HTTP method, protocol (http or https), domain the request was sent to and
    original client request path */
	next(); // Pass control to the next middleware/route handler
};

export default logger;
