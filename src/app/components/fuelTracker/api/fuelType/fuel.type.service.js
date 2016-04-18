(function() {
    'use strict';

    angular
        .module('fuelTrackerFrontend')
        .factory('FuelTypeService', FuelTypeService);

    /** @ngInject */
    function FuelTypeService($log, FuelTypeResource) {
        $log.debug('sono dentro il fuel_type service');
        var service = {
            list: list
        };
        return service;

        function list() {
            return FuelTypeResource.list().$promise.then(function(data) {
                $log.info('load fuel types: ',data);
                return data.types;
            });
        }
    }
})();
