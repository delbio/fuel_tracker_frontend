(function() {
  'use strict';

  angular
    .module('fuelTrackerFrontend')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
