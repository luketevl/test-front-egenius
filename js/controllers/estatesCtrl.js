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
        toastService.show('Listagem feita com sucesso');
      }
    }, function(error){
      console.log(error);
      }
    );

  $scope.add = function(estate){
    estatesAPIService.add(estate).then(function(response){
      console.log(response);
      toastService.show('Cadastrado com sucesso');
      $scope.estates.push(estate);
      $scope.estate = {};
    }, function(error){
      toastService.show('Não foi possível realizar o cadastro');
    });
    console.log(estate);
  };
};
})();
