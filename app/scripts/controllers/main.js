'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */

function bookService($http,$q){
	var deferred = $q.defer();
	$http.get('../data/sample.json')
	.then(function(data){
		deferred.resolve(data);
	});

	this.getBooks = function()
	{
		return deferred.promise;
	}
}


angular.module('mytodoApp')
.service("bookService", bookService)

  .controller('MainCtrl', function ($scope,bookService) {

  	var promise = bookService.getBooks();
  	promise.then(function(data){
  		$scope.books = data.data.books;
  		console.log($scope.books);
  	})


    
    $scope.todos = [ 'Item 1','Item 2','Item 3','item 4' ];
	$scope.addTodo = function () {
	  $scope.todos.push($scope.todo);
	  $scope.todo = '';
	};
	$scope.removeTodo = function (index) {
	  $scope.todos.splice(index, 1);
	};
	
  });
