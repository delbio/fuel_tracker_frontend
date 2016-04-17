(function() {
    'use strict';

    angular
        .module('fuelTrackerFrontend')
        .factory('CarService', CarService);

    /** @ngInject */
    function CarService($log, CarResource, CarRefuelResource) {
        $log.debug('sono dentro il car service');
        var service = {
            getCars: getCars,
            getCar: getCar,
            removeCar: removeCar,
            createCar: createCar,
            getRefuelForCar: getRefuelForCar,
            createRefuelForCar: createRefuelForCar
        };
        return service;

        function getCars() {
            return CarResource.list().$promise.then(function(data) {
                $log.info('load cars',data);
                return data.cars;
            });
        }
        function getCar(carId) {
            return CarResource.get({carId:carId}).$promise;
        }

        function removeCar(carId) {
            return CarResource.remove({carId:carId}).$promise;
        }

        function createCar(newObject){
            return CarResource.create().$promise;
        }

        function getRefuelForCar(carId) {
            return CarRefuelResource.list({carId:carId}).$promise.then(function(data) {
                $log.info('load refuels',data);
                return data.refuels;
            });
        }
        function createRefuelForCar(carId, refuelObject) {
            var formData = {};
            formData['refuel[date]'] = refuelObject.date;
            formData['refuel[carDistance]'] = refuelObject.carDistance;
            formData['refuel[unitPrice]'] = refuelObject.unitPrice;
            formData['refuel[amountPurchased]'] = refuelObject.amountPurchased;
            formData['refuel[type]'] = refuelObject.type;
            formData['refuel[petrolStation]'] = refuelObject.petrolStation;
            return CarRefuelResource.create({carId:carId}, formData).$promise;
        }
    }
})();
