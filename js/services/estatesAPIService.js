(function(){
  'use strict';

  angular.module('app').factory('estatesAPIService', estateService);

  function estateService($http, config){
    var config_http = {
      headers: {
        'Authorization': "Basic " + config.AUTHORIZATION,
      },
      "withCredentials" : false,
    };
    /**
      * GET estates
      * @author lukete
      * @param estate
      * @since 18/07/16
      * @return $http response
    **/
    var _get = function(course) {
      return $http.get(config.URL_REST);
    };

    return {
      get: _get,
    }
  }
})();
