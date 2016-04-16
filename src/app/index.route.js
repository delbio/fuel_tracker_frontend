(function() {
  'use strict';

  angular
    .module('fuelTrackerFrontend')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
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
        //.when('/test', {
        //    templateUrl: 'app/test/test.html',
        //    controller: 'TestController',
        //    controllerAs: 'test'
        //})
      .otherwise({
        redirectTo: '/'
      });
  }

})();
