// Source: https://medium.com/@tech.buildy/heres-a-linkedin-post-idea-for-your-audience-to-showcase-your-expertise-6e449c6ff9bd
const XMLHttpRequest = require("xhr2");
const url = "https://jsonplaceholder.typicode.com/posts"; // Example API

const xhr = new XMLHttpRequest();

xhr.open("GET", url, true); // Open new GET request to the described API and perform the operation asynchronously

xhr.onload = function () {
	if (xhr.status >= 200 && xhr.status < 300) {
		console.log("Response: ", JSON.parse(xhr.responseText));
		// If the status code indicates success, parse the response text as a JSON file
	} else {
		console.log("Error", xhr.status);
		// Otherwise, return an error and the status code
	}
};

// Handle the error
xhr.onerror = function () {
	console.error("Network error");
};

// Send the request
xhr.send();

// Open new POST request

const xhrPost = new XMLHttpRequest();

xhrPost.open("POST", url, true);

xhrPost.setRequestHeader("Content-type", "application/json");
// Set the Content-type field in the request's header to indicate that it is written in JSON

let myPost = {
	userId: 19,
	id: 999,
	title: "placeholder",
	body: "very insightful content oh yesss",
};

myPost = JSON.stringify(myPost);

xhrPost.onload = function () {
	if (xhr.status >= 200 && xhr.status < 300) {
		console.log("Post uploaded successfully", JSON.parse(xhr.responseText));
	}
};

xhrPost.send(myPost);
