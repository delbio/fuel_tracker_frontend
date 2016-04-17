(function() {
    'use strict';

    angular
        .module('fuelTrackerFrontend')
        .controller('CarsDetailRefuelsController', CarsDetailRefuelsController);

    /** @ngInject */
    function CarsDetailRefuelsController($log, $routeParams, CarService) {
        var vm = this;
        var carId = $routeParams.carId;
    }
})();