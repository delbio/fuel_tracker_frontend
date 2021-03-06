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
            createRefuelForCar: createRefuelForCar,
            getRefuelDetail: getRefuelDetail,
            removeRefuel: removeRefuel
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
                return data.refuels;
            });
        }
        function createRefuelForCar(carId, refuelObject) {
            $log.debug('create refuel request: ', refuelObject);

            var formData = {};
            formData['refuel[date]'] = moment(refuelObject.date).format('YYYY/MM/DD');;
            formData['refuel[carDistance]'] = refuelObject.carDistance;
            formData['refuel[unitPrice]'] = refuelObject.unitPrice;
            formData['refuel[amountPurchased]'] = refuelObject.amountPurchased;
            formData['refuel[type]'] = refuelObject.type;
            formData['refuel[petrolStation]'] = refuelObject.petrolStation;

            $log.debug('create refuel form data: ', formData);

            return CarRefuelResource.create({carId:carId}, formData).$promise;
        }

        function getRefuelDetail(carId, refuelId) {
            return CarRefuelResource.get({carId:carId, refuelId:refuelId}).$promise;
        }
        function removeRefuel(carId, refuelId) {
            return CarRefuelResource.remove({carId:carId, refuelId:refuelId}).$promise;
        }
    }
})();
