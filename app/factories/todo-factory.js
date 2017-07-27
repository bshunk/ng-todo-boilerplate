'use strict';

todoApp.factory("TodoFactory", function($q, $http, FirebaseUrl) {
	let getTodoList = () => {
		return $q( (resolve, reject) => {
			$http.get(`${FirebaseUrl}todos.json`)
			.then( (todoData) => {
				resolve(todoData);
			})
			.catch( (err) => {
				console.log("oops", err);
				reject(err);
			});
		});
	};
	
	return { getTodoList };
});
