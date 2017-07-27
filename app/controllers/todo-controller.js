'use strict';

todoApp.controller("TodoListController", function($scope, TodoFactory, UserFactory) {

  let currentUser = UserFactory.getUser();
  console.log("user?", currentUser);
  
  // for viewing all todo items, deleting an item, updating completed status
	
  function fetchTodos() {
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
  }
  
  fetchTodos();
	
  $scope.deleteTask = (taskId) => {
		console.log("delete called", taskId);
    TodoFactory.deleteTodoItem(taskId)
    .then( (data) => {
      console.log("removed item", data);
      fetchTodos();
    });
	};

	$scope.updateTodoStatus = (todoItem) => {
		console.log("status update");
    TodoFactory.updateTodoStatus(todoItem)
    .then( (data) => {
      console.log("Updated completed status");
    });
	};

    

});
