// (function() {
//         'use strict';
        
//         angular
//             .module('app.customers')
//             .config(config);

//         function config($stateProvider) {
//             $stateProvider
//                 .state('customers',{
//                     url:'/customers',
//                     // params:{customerId: null}, 
//                     views: {
//                         "main@": {
//                             templateUrl: './components/customers/customers.html',
//                             controller: 'CustomerController',
//                             controllerAs: 'ctrl'
//                         }
//                     }
//                 })
//         };
    
// })();

(function() {
        'use strict';
        
        angular
            .module('app.customers')
            .config(config);

        function config($stateProvider) {
            $stateProvider
                .state('customers',{
                    url:'/customers',
                    // params:{customerId: null}, 
                    templateUrl: './components/customers/customers.html',
                    controller: 'CustomerController',
                    controllerAs: 'ctrl'
                })
        };
    
})();