(function() {
        'use strict';

        angular
            .module('app.orders')
            .config(config);

        function config($stateProvider) {
            $stateProvider
                .state('orders',{
                    url:'/customers:customerId', 
                    templateUrl: './components/orders/orders.html',
                    controller: 'OrdersController',
                    controllerAs: 'ctrl',
                    resolve: {
                       customerInfo: customerInfo,

                    }
            });
        }

        function customerInfo( customersFactory, $stateParams) {
                console.log($stateParams);
                return customersFactory.getCustomer($stateParams.customerId);
        }

})();


