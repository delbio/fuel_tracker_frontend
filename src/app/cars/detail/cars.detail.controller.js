(function() {
    'use strict';

    angular
        .module('fuelTrackerFrontend')
        .controller('CarsDetailController', CarsDetailController);

    /** @ngInject */
    function CarsDetailController($log, $routeParams, CarService) {
        var vm = this;
        var loader = CarService;
        var carId = $routeParams.carId;

        vm.detail = {};

        logStatus();


        activate();

        function activate() {
            loadCar(carId);
        }

        function loadCar(carId){
            loader.getCar(carId).then(setCars, carsErrorHandler);
        }

        function setCars(loadedCar) {
            vm.detail = loadedCar;
            logStatus();
        }

        function carsErrorHandler(error) {
            logStatus(error);
        }

        function logStatus(erros) {
            $log.debug(vm.detail, erros);
        }
    }
})();
