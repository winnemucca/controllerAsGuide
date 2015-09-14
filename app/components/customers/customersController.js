(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomerController', CustomerController);

        function CustomerController($stateParams, customerList) {
            var vm = this;
            vm.customers = [];
            vm.orders = null;
            // table sorting
            vm.sortBy = 'name';
            vm.reverse = false;
            vm.doSort = doSort;

            getCustomersList();

            function getCustomersList() {
                vm.customers = customerList;
            }

            function doSort(propName) {
                vm.sortBy=propName;
                vm.reverse=!vm.reverse
            }
        }
})();


// google places api
// AIzaSyDrrOoU-7Xdf6RDmthDxtfDD_wO99Q4CEI
    

