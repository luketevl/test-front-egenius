(function(){
  'use strict';

  angular.module('app').controller('appCtrl', appCtrl);

  appCtrl.$inject = ['$scope', '$mdSidenav'];

  function appCtrl($scope, $mdSidenav){
    $scope.openMenu = function() {
    $mdSidenav('right').toggle();
  };
  }
})();
