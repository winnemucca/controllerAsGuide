(function() {
        'use strict';
        
        angular
            .module('app.customers')
            .config(config);

        function config($stateProvider) {
            $stateProvider
                .state('customers',{
                    url:'/customers',
                    templateUrl: './components/customers/customers.html',
                    controller: 'CustomerController',
                    controllerAs: 'ctrl',
                    resolve: {
                        customerList: customerList
                    }
                });
        }

        function customerList(customersFactory) {
            console.log('get customers',customersFactory.getCustomers());
            return customersFactory.getCustomers();
        }
    
})();

  