let posts = [
	{ id: 1, title: "Post one" },
	{ id: 2, title: "Post one" },
	{ id: 3, title: "Post one" },
];

// Get all posts
export const getPosts = (req, res, next) => {
	const limit = parseInt(req.query.limit); // Access query parameter from the URL of the HTTP request

	if (!isNaN(limit) && limit > 0) {
		return res.status(200).json(posts.slice(0, limit));
	} // Ensure input is valid

	res.status(200).json(posts);
};

// Get a single post
export const getPost = (req, res, next) => {
	const id = parseInt(req.params.id); // Parse the ID sent in by the original request
	const post = posts.find((post) => post.id === id); // Returns first element in the array that is a match

	if (!post) {
		const error = new Error(`A post with the ID of ${id} was not found`);
		error.status = 404;
		return next(error); // Execute the next middleware function that receives an error
		// Using return next(error);, ensure subsequent code does not run
	}

	res.status(200).json(post);
};

// Create a new post
export const createPost = (req, res, next) => {
	const newPost = {
		id: posts.length + 1,
		title: req.body.title,
	};

	console.log(req.body);

	if (!newPost.title) {
		const error = new Error(`Include a title`);
		error.status = 400;
		return next(error);
	} else {
		console.log("Yaaay!");
	}

	posts.push(newPost);
	res.status(201).json(posts);
};

// Update a post
export const updatePost = (req, res, next) => {
	const id = parseInt(req.params.id);
	const post = posts.find((post) => post.id === id);

	if (!post) {
		const error = new Error("Please provide a valid ID");
		error.status = 404;
		return next(error);
	}

	post.title = req.body.title;
	res.status(200).json(posts); // Set HTTP status for the response to 200 and send a JSON response
};

// Delete a post
export const deletePost = (req, res, next) => {
	// Take in an ID from an incoming request, search for the corresponding post within the array, return success message after deletion
	const id = parseInt(req.params.id);
	if (isNaN(id)) {
		return res.status(400).json({ error: "ID parameter missing" });
	}
	const post = posts.find((post) => post.id === id);

	if (!post) {
		const error = new Error("Please provide the ID of an existing post");
		error.status = 404;
		return next(error);
	}

	posts = posts.filter((post) => post.id != id);
	res.status(200).json(posts);
};
