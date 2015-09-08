(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomerController', CustomerController);

        function CustomerController($stateParams, customersFactory) {
            var vm = this;
            vm.customers = [];
            vm.orders = null;
            // table sorting
            vm.sortBy = 'name';
            vm.reverse = false;
            vm.doSort = doSort;

            activate()
            function activate() {
                return getCustomersList().then(function() {
                    console.log('activated')
                });
            }

            function getCustomersList() {
                return customersFactory.getCustomers()
                    .then(function(data) {
                        vm.customers = data;
                        return vm.customers;
                    });
            }

            function doSort(propName) {
                vm.sortBy=propName;
                vm.reverse=!vm.reverse
            }
        }
})();


// google places api
// AIzaSyDrrOoU-7Xdf6RDmthDxtfDD_wO99Q4CEI
    



 //     vm.customers = [];
        //     vm.orders = null;
        //     // table sorting
        //     vm.sortBy = 'name';
        //     vm.reverse = false;
        //     vm.doSort = doSort;

        //     function init() {
        //         console.log(customersFactory.getCustomers())
        //         vm.customers = customersFactory.getCustomers();
        //         console.log('activated', vm.customers)
        //         return vm.customers;
        //     }
        //     init();
            
        // // // customerId comes from url param
        //     function doSort(propName) {
        //         vm.sortBy=propName;
        //         vm.reverse=!vm.reverse
        //     }