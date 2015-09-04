(function() {
    'use strict';

    angular
        .module('blocks.exception')
        .factory('exception', exception);

    exception.$inject = ['logger'];

    /* @ngInject */
    function exception(logger) {
        var service = {
            console.log('logger', logger)
            catcher: catcher
        };
        return service;

        function catcher(message) {
            return function(reason) {
                console.log('reason', reason);
                logger.error(message, reason);
            };
        }
    }
})();
