(function() {
  'use strict';

  angular
    .module('fuelTrackerFrontend')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
        .when('/cars', {
            templateUrl: 'app/cars/cars.html',
            controller: 'CarsController',
            controllerAs: 'cars'
        })
        .when('/cars/:carId', {
            templateUrl: 'app/cars/detail/cars.detail.html',
            controller: 'CarsDetailController',
            controllerAs: 'car'
        })
        .when('/cars/:carId/refuels/new', {
            templateUrl: 'app/cars/detail/refuels/new/cars.detail.refuels.new.html',
            controller: 'CarsDetailRefuelsNewController',
            controllerAs: 'vm'
        })
        .when('/test', {
            templateUrl: 'app/test/test.html',
            controller: 'TestController',
            controllerAs: 'test'
        })
        .otherwise({
        redirectTo: '/cars'
        });
  }

})();
