(function(){
  'use strict';

  angular.module('app').controller('estatesCtrl', coursesCtrl);

  coursesCtrl.$inject = ['$scope', '$mdDialog', 'estatesAPIService', 'toastService'];

  function coursesCtrl($scope, $mdDialog, estatesAPIService, toastService){
    // GET LIST ESTATES
    estatesAPIService.get().then(function(response){
      console.log(response);
      if(response.status){
        $scope.estates = response.data.result;
      }
    }, function(error){
      console.log(error);
      }
    );
  }
})();
