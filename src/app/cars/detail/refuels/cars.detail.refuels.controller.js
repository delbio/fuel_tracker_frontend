(function() {
    'use strict';

    angular
        .module('fuelTrackerFrontend')
        .controller('CarsDetailRefuelsController', CarsDetailRefuelsController);

    /** @ngInject */
    function CarsDetailRefuelsController($log, $routeParams, CarService) {
        var vm = this;
        var carId = $routeParams.carId;
        var refuelId = $routeParams.refuelId;

        vm.refuel = {};
        vm.remove = removeRefuel;

        activate();

        function activate() {
            loadRefuel();
        }

        function loadRefuel() {
            CarService.getRefuelDetail(carId, refuelId)
                .then(onLoad, onError);
        }

        function onLoad(data) {
            $log.debug('refuel detail loaded: ', data);
            vm.refuel = data;
        }

        function onError(error) {
            $log.debug('refuel detail error: ', error);
        }

        function removeRefuel() {

        }
    }
})();