(function() {
    'use strict';
    angular
        .module('app.orders')
        .controller('OrdersController', OrdersController);

    // MainController.$inject = [ 'SessionService'];
    function OrdersController($stateParams, customersFactory) {
        console.log('in');
            var vm = this;
            vm.title = "Customer Orders";
            var customerId = $stateParams.customerId;

            vm.customer = null;
            function init() {
                vm.customer = customersFactory.getCustomer(customerId);
            }            
            
            init();
    }
}());


    