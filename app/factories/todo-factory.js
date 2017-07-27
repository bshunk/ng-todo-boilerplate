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
	
  let postNewItem = (newItem) => {
    return $q( (resolve, reject) => {
      $http.post(`${FirebaseUrl}todos.json`,
        angular.toJson(newItem))
      .then( (newItemData) => {
        resolve(newItemData);
      })
      .catch ( (err) => {
        reject(err);
      });
    });
  };

	let updateTodoStatus = (todo) => {
		let itemId = todo.id;
		// PUT the entire obj to FB
	};

	return { getTodoList, postNewItem };
});
