(function() {
    // 'use strict';
    angular
        .module('app.orders')
        .controller('OrdersController', OrdersController);

    function OrdersController($stateParams, customerInfo) {
        console.log('in', $stateParams);
            var vm = this;
            vm.title = "Customer Orders " + $stateParams.customerId;
            vm.customer = customerInfo;
    }
}());


    