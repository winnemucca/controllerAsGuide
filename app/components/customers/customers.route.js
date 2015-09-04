(function() {
        'use strict';
        
        angular
            .module('app.customers')
            .config(config);

        function config($stateProvider) {
        console.log('customers route')
            $stateProvider
                .state('customers',{
                    url:'/customers', 
                    templateUrl: './components/customers/customers.html',
                    controller: 'CustomerController',
                    controllerAs: 'ctrl'
            })
        };
    
})();

// (function() {
//     'use strict';

//     angular
//         .module('app.customers')
//         .run(appRun);

//     appRun.$inject = ['routerHelper'];
//     /* @ngInject */
//     function appRun(routerHelper) {
//         routerHelper.configureStates(getStates());
//     }

//     function getStates() {
//         return [
            // {
                // state: 'customers',
                // config: {
                //     url: '/customers',
                //     templateUrl: 'app/components/customers/customers.html',
                //     controller: 'CustomerController',
                //     controllerAs: 'ctrl'                  
//                 }
//             }
//         ];
//     }
// })();