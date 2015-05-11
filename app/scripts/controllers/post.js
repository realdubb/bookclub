'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mytodoApp
 */


/*
  Functions for facebook authentication.

  Used in post.html

*/



angular.module('bookClub')

  .controller('PostCtrl', function($scope, $timeout, Facebook) {

  	var userIsConnected = false;


      
  // Define user empty data :/
  $scope.user = {};
  
  // Defining user logged status
  $scope.logged = false;
  
  // And some fancy flags to display messages upon user status change
  $scope.byebye = false;
  $scope.salutation = false;

  /**
   * Login
   */
   $scope.login = function() {
     Facebook.login(function(response) {
      if (response.status == 'connected') {
        $scope.logged = true;
        $scope.me();
      }
    
    }, {scope: 'email'});
   };

    $scope.getLoginStatus = function() {
      Facebook.getLoginStatus(function(response) {
        if(response.status === 'connected') {
          $scope.loggedIn = true;
        } else {
          $scope.loggedIn = false;
        }
      });
    };

    $scope.me = function() {
      Facebook.api('/me', function(response) {
        $scope.user = response;
        console.log(response);
      });

    };

      /**
       * IntentLogin
       */
      $scope.IntentLogin = function() {
        if(!userIsConnected) {
          $scope.login();
        }
      };
  
	/**
       * Watch for Facebook to be ready.
       * There's also the event that could be used
       */
      $scope.$watch(
        function() {
          return Facebook.isReady();
        },
        function(newVal) {
          if (newVal)
            $scope.facebookReady = true;
        }
      );

      /**
       * Logout
       */
      $scope.logout = function() {
        Facebook.logout(function() {
          $scope.$apply(function() {
            $scope.user   = {};
            $scope.logged = false;  
            userIsConnected = false;
          });
        });
      }
      
      /**
       * Taking approach of Events :D
       */
      $scope.$on('Facebook:statusChange', function(ev, data) {
        console.log('Status: ', data);
        if (data.status == 'connected') {
          $scope.$apply(function() {
          	$scope.me();
          	$scope.logged = true;
          	userIsConnected = true;
            $scope.salutation = true;
            $scope.byebye     = false;    
          });
        } else {
          $scope.$apply(function() {
            $scope.salutation = false;
            $scope.byebye     = true;
            
            // Dismiss byebye message after two seconds
            $timeout(function() {
              $scope.byebye = false;
            }, 2000)
          });
        }
        
        
      });
  });