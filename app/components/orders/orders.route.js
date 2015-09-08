(function() {
        'use strict';

        angular
            .module('app.orders')
            .config(config);

        function config($stateProvider) {
            $stateProvider
                .state('orders',{
                    // params: {customerid: null},
                    url:'/customers:customerId', 
                    templateUrl: './components/orders/orders.html',
                    controller: 'OrdersController',
                    controllerAs: 'ctrl'
            })
            // $locationProvider.html5Mode(false);

        };
    
})();

