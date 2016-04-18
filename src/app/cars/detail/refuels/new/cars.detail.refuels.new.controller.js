(function() {
    'use strict';

    angular
        .module('fuelTrackerFrontend')
        .controller('CarsDetailRefuelsNewController', CarsDetailRefuelsNewController);

    /** @ngInject */
    function CarsDetailRefuelsNewController($log, $routeParams, CarService, FuelTypeService, PetrolStationService) {
        var vm = this;
        var carId = $routeParams.carId;

        vm.fuelTypes = [];
        vm.petrolStations = [];

        vm.newRefuel = {};

        vm.newRefuel.date = null;
        vm.newRefuel.carDistance = null;
        vm.newRefuel.unitPrice = null;
        vm.newRefuel.amountPurchased = null;
        vm.newRefuel.type = null;
        vm.newRefuel.petrolStation = null;

        vm.addRefuel = addRefuel;
        vm.showRefuelStatus = addRefuel;

        activate();

        function activate() {
            loadFuelTypes();
            loadPetrolStations();
        }

        function addRefuel(){
            CarService.createRefuelForCar(carId, vm.newRefuel).then(function(data) {
                $log.info('create refuels',data);
            }, function(error){
                $log.debug('create refuel error',error);
            });
        }
        // Refuel Type
        function loadFuelTypes() { FuelTypeService.list().then(onFuelTypeLoaded, onFuelTypeError); }
        function onFuelTypeLoaded(data) { vm.fuelTypes = data; }
        function onFuelTypeError(error) { $log.debug('load fuel type error:', error); }
        // Petrol Station
        function loadPetrolStations() { PetrolStationService.list().then(onPetrolStatiosnLoaded, onPetrolStatiosnError) }
        function onPetrolStatiosnLoaded(data) { vm.petrolStations = data; }
        function onPetrolStatiosnError(error) { $log.debug('load petrol stations error:', error); }
    }
})();