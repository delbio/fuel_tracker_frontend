(function() {
    'use strict';

    angular
        .module('fuelTrackerFrontend')
        .factory('PetrolStationResource', PetrolStationResource);

    /** @ngInject */
    function PetrolStationResource($resource, apiConfig, transformRequestAsFormPost) {
        var baseApiUrl = apiConfig.baseApiUrl;

        var url = baseApiUrl + '/petrolstations';
        var actions = {
            list: {
                method: 'GET',
                url: url,
                responseType: 'json',
            },
            create: {
                method: 'POST',
                url: url,
                responseType: 'json',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}, //Fix for Symfony
                transformRequest: transformRequestAsFormPost
            }
        };

        return $resource(url, {}, actions);
    }
})();
