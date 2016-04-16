(function() {
    'use strict';

    angular
        .module('fuelTrackerFrontend')
        .factory('CarResource', CarResource);

    /** @ngInject */
    function CarResource($resource, apiConfig) {
        var baseApiUrl = apiConfig.baseApiUrl;

        var url = baseApiUrl + '/cars';
        var actions = {
            get: {
                method: 'GET',
                url: url + '/:carId',
                params: {carId: '@id'},
                responseType: 'json'
            },
            list: {
                method: 'GET',
                url: url,
                responseType: 'json'
            }
        };

        return $resource(url, {}, actions);
    }
})();
