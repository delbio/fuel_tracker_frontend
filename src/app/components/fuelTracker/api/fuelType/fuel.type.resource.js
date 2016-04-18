(function() {
    'use strict';

    angular
        .module('fuelTrackerFrontend')
        .factory('FuelTypeResource', FuelTypeResource);

    /** @ngInject */
    function FuelTypeResource($resource, apiConfig) {
        var baseApiUrl = apiConfig.baseApiUrl;

        var url = baseApiUrl + '/fuel/types';
        var actions = {
            list: {
                method: 'GET',
                url: url,
                responseType: 'json',
            }
        };

        return $resource(url, {}, actions);
    }
})();
