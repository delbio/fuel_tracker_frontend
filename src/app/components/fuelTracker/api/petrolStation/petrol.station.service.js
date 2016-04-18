(function() {
    'use strict';

    angular
        .module('fuelTrackerFrontend')
        .factory('PetrolStationService', PetrolStationService);

    /** @ngInject */
    function PetrolStationService($log, PetrolStationResource) {
        $log.debug('sono dentro lo station service');
        var service = {
            create: create,
            list: list
        };
        return service;

        function create(stationObject) {
            var formData = {};
            formData['petrol_station[name]'] = stationObject.name;
            return PetrolStationResource.create({}, formData).$promise;
        }

        function list() {
            return PetrolStationResource.list().$promise.then(function(data) {
                $log.info('load petrol stations: ',data);
                return data.petrolStations;
            });
        }
    }
})();
