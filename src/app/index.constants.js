/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('fuelTrackerFrontend')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('apiConfig',{
      baseApiUrl: 'http://localhost:8000/api'
    });

})();
