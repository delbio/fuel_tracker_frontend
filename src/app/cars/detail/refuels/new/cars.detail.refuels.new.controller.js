(function() {
    'use strict';

    angular
        .module('fuelTrackerFrontend')
        .controller('CarsDetailRefuelsNewController', CarsDetailRefuelsNewController);

    /** @ngInject */
    function CarsDetailRefuelsNewController($log, $location, $routeParams, CarService, FuelTypeService, PetrolStationService) {
        var vm = this;
        var carId = $routeParams.carId;

        vm.fuelTypes = [];
        vm.petrolStations = [];
        vm.maxDate = new Date();
        vm.minDate = new Date('1900/01/01');

        vm.newRefuel = {};

        vm.newRefuel.date = new Date();
        vm.newRefuel.carDistance = null;
        vm.newRefuel.unitPrice = null;
        vm.newRefuel.amountPurchased = null;
        vm.newRefuel.type = null;
        vm.newRefuel.petrolStation = null;

        vm.addRefuel = addRefuel;
        vm.persist = addRefuel;
        vm.loadType = loadFuelTypes;
        vm.loadStation = loadPetrolStations;
        vm.exit = exit;

        function exit() { moveToCarDetail(); }
        // New Refuel
        function addRefuel(){ CarService.createRefuelForCar(carId, vm.newRefuel).then(onRefuelCreated,onRefuelCreatedError); }
        function onRefuelCreated(data) {
            $log.info('create refuels',data);
            moveToCarDetail();
        }
        function onRefuelCreatedError(error) { $log.debug('create refuel error',error); }
        // Refuel Type
        function loadFuelTypes() { FuelTypeService.list().then(onFuelTypeLoaded, onFuelTypeError); }
        function onFuelTypeLoaded(data) { vm.fuelTypes = data; }
        function onFuelTypeError(error) { $log.debug('load fuel type error:', error); }
        // Petrol Station
        function loadPetrolStations() { PetrolStationService.list().then(onPetrolStatiosnLoaded, onPetrolStatiosnError) }
        function onPetrolStatiosnLoaded(data) { vm.petrolStations = data; }
        function onPetrolStatiosnError(error) { $log.debug('load petrol stations error:', error); }
        // move to car detail
        function moveToCarDetail() { $location.path( "/cars/" + carId); }
    }
})();