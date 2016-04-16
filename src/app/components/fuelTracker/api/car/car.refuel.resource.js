(function() {
    'use strict';

    angular
        .module('fuelTrackerFrontend')
        .factory('CarRefuelResource', CarRefuelResource);

    /** @ngInject */
    function CarRefuelResource($resource, apiConfig) {
        var baseApiUrl = apiConfig.baseApiUrl;

        var url = baseApiUrl + '/cars/:carId/refuels';
        var actions = {
            get: {
                method: 'GET',
                url: url + '/:refuelId',
                params: {carId: '@carId', refuelId: '@id'},
                responseType: 'json'
            },
            list: {
                method: 'GET',
                url: url,
                params: {carId: '@id'},
                responseType: 'json'
            },
            remove: {
                method: 'DELETE',
                url: url + '/:refuelId',
                params: {carId: '@carId', refuelId: '@id'},
                responseType: 'json'
            },
            create: {
                method: 'POST',
                url: url,
                responseType: 'json'
            }
        };

        return $resource(url, {}, actions);
    }
})();
