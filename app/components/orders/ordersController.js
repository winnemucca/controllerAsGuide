(function() {
    // 'use strict';
    angular
        .module('app.orders')
        .controller('OrdersController', OrdersController);

    function OrdersController($stateParams, customerId) {
        console.log('in');
            var vm = this;
            vm.title = "Customer Orders";
            vm.customer = null;
    }
}());


    