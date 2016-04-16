(function() {
    'use strict';

    angular
        .module('fuelTrackerFrontend')
        .factory('CarService', CarService);

    /** @ngInject */
    function CarService($log, CarResource) {
        $log.debug('sono dentro il car service');
        var service = {
            getCars: getCars,
            getCar: getCar,
            remove: remove
        };
        return service;

        function getCars() {
            return CarResource.list().$promise.then(function(data) {
                $log.info(data);
                return data.cars;
            });
        }
        function getCar(carId) {
            return CarResource.get({carId:carId}).$promise;
        }

        function remove(carId) {
            return CarResource.remove({carId:carId}).$promise;
        }
    }
})();
