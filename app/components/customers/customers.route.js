// (function() {
//         'use strict';
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
                    views: {
                        "main@": {
                            templateUrl: './components/customers/customers.html',
                            controller: 'CustomerController',
                            controllerAs: 'ctrl'
                        }
                    }
                    // resolve: {
                    //     customerId: ['$stateParams', function($stateParams) {
                    //         return $stateParams.customerId;
                    //     }]
                    // }
            })
        };
    
})();