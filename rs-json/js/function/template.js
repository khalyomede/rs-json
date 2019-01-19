const template = function(resolve, reject, path, options) {
	const absolutePath = `/rs-json/html/template/${path}.html`;

	console.log("calling", path);

	fetch(absolutePath)
		.then(function(response) {
			return response.text();
		})
		.then(function(html) {
			resolve({
				template: html,
				...options
			});
		})
		.catch(function(error) {
			reject(error);
		});
};
