(function () {
    'use strict';

    angular
        .module('app')
        .controller('menuController', function ($log, menuService) {
            var ctrl = this;

            ctrl.$onInit = function () {
                $log.info('Inicializando componente del menu...');
                ctrl.titulo = 'Bienvenido';
                ctrl.mensaje = 'Hola mundo!';
                ctrl.obtenPersonas();
            };

            ctrl.obtenPersonas = function () {
                menuService.obtenPersonas()
                    .then(function (response) {
                        ctrl.personas = response;
                    })
                    .catch(function (error) {
                        ctrl.error = error;
                    });
            };
        });
})();
