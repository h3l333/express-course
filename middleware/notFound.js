const notFound = (req, res, next) => {
	const error = new Error("Not Found");
	error.status = 404;
	next(
		error,
	); /* Aborts normal request handling and invokes the error handler. Error handlers can be identified by the presence of the error
    argument */
};

export default notFound;
