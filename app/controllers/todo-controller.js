'use strict';

todoApp.controller("TodoListController", function($scope, TodoFactory, UserFactory) {

  let currentUser = UserFactory.getUser();
  console.log("user?", currentUser);
  
	// for viewing all todo items, deleting an item, updating completed status
	TodoFactory.getTodoList(UserFactory.getUser())
	.then( (todoList) => {
		console.log("todo Data", todoList);
		let todoData = todoList.data;
		Object.keys(todoData).forEach( (key) => {
			todoData[key].id = key;
		});
		$scope.todos = todoData;
	})
	.catch( (err) => {
		console.log("error!");
	});

	$scope.deleteTask = (taskId) => {
		console.log("delete called", taskId);
	};

	$scope.updateTaskStatus = () => {
		console.log("status update");
	};

    

});
