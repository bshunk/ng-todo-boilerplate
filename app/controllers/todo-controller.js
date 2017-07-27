'use strict';

todoApp.controller("TodoListController", function($scope, TodoFactory) {

	// for viewing all todo items, deleting an item, updating completed status
	TodoFactory.getTodoList()
	.then( (todoList) => {
		console.log("todo Data", todoList);
	})
	.catch( (err) => {
		console.log("error!");
	});

});
