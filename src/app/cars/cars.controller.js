(function() {
    'use strict';

    angular
        .module('fuelTrackerFrontend')
        .controller('CarsController', CarsController);

    /** @ngInject */
    function CarsController($log, CarService) {
        var vm = this;
        var loader = CarService;
        var cars = [];

        vm.getCars = getCars;
        vm.rmCar = removeCar;


        logStatus();
        activate();

        function activate() { loadCars(); }
        function getCars() { return cars; }

        function removeCar(carId){
            $log.debug('remove car: '.carId);
            loader.remove(carId).then(
                loadCars,
                carsErrorHandler
            );
        }
        function loadCars(){ loader.getCars().then(setCars, carsErrorHandler); }
        function setCars(loadedCars) {
            cars = loadedCars;
            logStatus();
        }
        function carsErrorHandler(error) { logStatus(error); }
        function logStatus(erros) {
            $log.debug(cars, erros);
        }
    }
})();
