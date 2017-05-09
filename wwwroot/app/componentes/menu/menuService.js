(function () {
    'use strict';

    angular
        .module('app')
        .factory('menuService', function ($http, $q) {
            var url = 'api/prueba';
            var menuService = {
                obtenPersonas: obtenPersonas
            };

            function obtenPersonas() {
                var defered = $q.defer();
                var promise = defered.promise;

                $http({
                    method: 'GET',
                    url: url
                }).then(function successCallback(response) {
                        defered.resolve(response.data);
                    }, function errorCallback(response) {
                        defered.reject(response.status);
                    });
                return promise;
            };

            return menuService;
        });
})();