(function() {
    'use strict';

    angular
        .module('fuelTrackerFrontend')
        .controller('CarsController', CarsController);

    /** @ngInject */
    function CarsController($log, CarService) {
        var vm = this;
        var loader = CarService;
        vm.cars = [];

        logStatus();


        activate();

        function activate() {
            loadCars();
        }

        function loadCars(){
            loader.getCars().then(setCars, carsErrorHandler);
        }

        function setCars(loadedCars) {
            vm.cars = loadedCars;
            logStatus();
        }

        function carsErrorHandler(error) {
            logStatus(error);
        }

        function logStatus(erros) {
            $log.debug(vm.cars, erros);
        }
    }
})();
