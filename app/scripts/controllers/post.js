'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
.
  .controller('PostCtrl', function ($scope) {
    $scope.awesomeThing = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
