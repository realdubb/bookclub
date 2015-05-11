'use strict';


/**
 * @ngdoc function
 * @name mytodoApp.service
 * @description
 * # bookService
 * Controller of the mytodoApp
 */


/*
	This function will load sample book data
	from  app/data/sample.json

	We'll then use the function to create
	bookService for our controller
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


/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('bookClub')
.service("bookService", bookService)

  .controller('MainCtrl', function ($scope,bookService) {

  	var promise = bookService.getBooks();
  	promise.then(function(data){
  		$scope.books = data.data.books;
  	})


    
	
  });
