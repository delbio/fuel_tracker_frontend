(function() {
    'use strict';

    angular
        .module('fuelTrackerFrontend')
        .controller('CarsController', CarsController);

    /** @ngInject */
    function CarsController($log, $location, CarService) {
        var vm = this;
        var loader = CarService;
        var cars = [];

        vm.getCars = getCars;
        vm.rm = removeCar;
        vm.show = showCar;


        activate();

        function activate() { loadCars(); }
        function getCars() { return cars; }

        function showCar(carId) {
            $log.debug('remove car: ' + carId );
            $location.path( "/cars/" + carId );
        }

        function removeCar(carId){
            $log.debug('remove car: ' + carId);
            loader.removeCar(carId).then(
                loadCars,
                carsErrorHandler
            );
        }
        function loadCars(){ loader.getCars().then(setCars, carsErrorHandler); }
        function setCars(loadedCars) {
            cars = loadedCars;
            $log.debug('loaded cars: ' + cars);
        }
        function carsErrorHandler(error) { $log.debug(error); }
    }
})();
