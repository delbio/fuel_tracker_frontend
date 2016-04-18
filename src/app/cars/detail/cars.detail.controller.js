(function() {
    'use strict';

    angular
        .module('fuelTrackerFrontend')
        .controller('CarsDetailController', CarsDetailController);

    /** @ngInject */
    function CarsDetailController($log, $location, $routeParams, CarService) {
        var vm = this;
        var loader = CarService;
        var carId = $routeParams.carId;

        vm.detail = {};
        vm.refuels = [];
        vm.showRefuel = showRefuel;
        vm.showNewRefuelForm = showNewRefuelForm;
        vm.showHome = showHome;

        logStatus();
        activate();

        function activate() { loadCar(carId); }
        function logStatus(erros) { $log.debug(vm.detail, erros); }
        function loadCar(carId){ loader.getCar(carId).then(setCars, carsErrorHandler); }
        function setCars(loadedCar) {
            vm.detail = loadedCar;
            loadRefuels(vm.detail.id);
            logStatus();
        }
        function carsErrorHandler(error) { logStatus(error); }
        function loadRefuels(carId) {
            loader.getRefuelForCar(carId).then(setRefuels, refuelsErrorHandler);
        }
        function setRefuels(loadedRefuels) {
            vm.refuels = loadedRefuels;
            logStatus();
        }
        function refuelsErrorHandler(error) { logStatus(error); }
        function showRefuel(refuelId) { $location.path( "/cars/" + carId + "/refuels/" + refuelId); }
        function showNewRefuelForm() { $location.path( "/cars/" + carId + "/refuels/new"); }
        function showHome() { $location.path( "/cars/"); }
    }
})();
