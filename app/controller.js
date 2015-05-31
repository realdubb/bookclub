angular.module( 'bookClub.controller', [] )

.controller('bookCtrl',function($scope,Books){
  $scope.books = Books.all();
})

;//end of module
