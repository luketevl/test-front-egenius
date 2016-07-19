(function(){
  'use strict';

  angular.module('app').config(routes);

  routes.$inject = ['$routeProvider'];

  function routes($routeProvider){
    // Route ESTATES
    $routeProvider.when('/estates', {
      templateUrl: '/views/estates.html',
      controller:  'estatesCtrl',
    });

    // DEFAULT route
    $routeProvider.otherwise({redirectTo: '/estates'});
  }
})();
