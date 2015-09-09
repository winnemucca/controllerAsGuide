// (function() {
//         'use strict';

//         angular
//             .module('app.orders')
//             .config(config);

//         function config($stateProvider) {
//             $stateProvider
//                 .state('orders',{
//                     params: {customerid: null},
//                     url:'/customers:customerId', 
//                     templateUrl: './components/orders/orders.html',
//                     controller: 'OrdersController',
//                     controllerAs: 'ctrl'
//                     // resolve: {
//                     //     customerId:[ '$stateParams','customerFactory', function( $stateParams, customerFactory) {
//                     //         return customerFactory.getCustomers($stateParams.id);
//                     //     }]
//                     // }
//             })
//         };
// })();


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
                        customerId: function( $stateParams, customerFactory) {
                            return customerFactory.getCustomers();
                        }
                    }
            })
        };
})();
