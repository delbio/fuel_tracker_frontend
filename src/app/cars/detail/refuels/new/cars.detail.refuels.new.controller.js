(function() {
    'use strict';

    angular
        .module('fuelTrackerFrontend')
        .controller('CarsDetailRefuelsNewController', CarsDetailRefuelsNewController);

    /** @ngInject */
    function CarsDetailRefuelsNewController($log, $routeParams, CarService) {
        var vm = this;
        var carId = $routeParams.carId;

        vm.newRefuel = {};

        vm.newRefuel.date = null;
        vm.newRefuel.carDistance = null;
        vm.newRefuel.unitPrice = null;
        vm.newRefuel.amountPurchased = null;
        vm.newRefuel.type = null;
        vm.newRefuel.petrolStation = null;

        vm.addRefuel = addRefuel;
        vm.showRefuelStatus = addRefuel;

        function addRefuel(){
            CarService.createRefuelForCar(carId, vm.newRefuel).then(function(data) {
                $log.info('create refuels',data);
            }, function(error){
                $log.debug('create refuel error',error);
            });
        }
    }
})();