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
    var _get = function() {
      return $http.get(config.URL_REST);
    };

    /**
      * ADD estates
      * @author lukete
      * @param estate
      * @since 27/07/16
      * @return $http response
    **/
    var _add = function(estate) {
      return $http.post(config.URL_REST, estate);
    };
    return {
      get: _get,
      add: _add,
    }
  }
})();
