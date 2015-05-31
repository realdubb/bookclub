angular.module( 'bookClub.controller', [] )

.controller('bookCtrl',function($scope,Books){
  $scope.books = Books.all();
})

.controller('bookDetailsCtrl',function($scope,$stateParams,Books){
  $scope.book = Books.get($stateParams.bookId);
})

;//end of module
