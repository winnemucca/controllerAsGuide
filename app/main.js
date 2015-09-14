(function () {
    'use strict';

    angular.module('app', [
    	'app.services',
        'app.customers',
        'app.orders',
        'ui.router'])
    	.constant('_', window._)
    	.run(function($rootScope) {
    		$rootScope._ = window._;
    	});
})();


