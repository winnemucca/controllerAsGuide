(function() {
        'use strict';

        angular
            .module('app.orders')
            .config(config);

        function config($stateProvider) {
            $stateProvider
                .state('orders',{
                    url:'/orders:customerId', 
                    templateUrl: './components/orders/orders.html',
                    controller: 'OrdersController',
                    controllerAs: 'ctrl'
            })
        };
    
})();

// (function() {
//     'use strict';

//     angular
//         .module('app.orders')
//         .run(appRun);

//     appRun.$inject = ['routerHelper'];
//     /* @ngInject */
//     function appRun(routerHelper) {
//         routerHelper.configureStates(getStates());
//     }

//     function getStates() {
//         return [
//             {
//                 state: 'orders',
//                 config: {
//                     url: '/orders',
//                     templateUrl: 'app/components/orders/orders.html',
//                     controller: 'OrdersController',
//                     controllerAs: 'ctrl',
//                     title: 'Orders'                  
//                 }
//             }
//         ];
//     }
// })();