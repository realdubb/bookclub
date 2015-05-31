angular.module( 'bookClub', [ 'ngMaterial','ui.router','bookClub.controller','bookClub.services'] )
//config the material theme
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('yellow');
})
.config(function($stateProvider, $urlRouterProvider){

      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/home")

      $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "templates/home.html",
            controller: 'bookCtrl'
        })
        .state('sell', {
            url: "/sell",
            templateUrl: "templates/sell.html"
        });
    });