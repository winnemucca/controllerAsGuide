(function() {
    // 'use strict';
    angular
        .module('app.orders')
        .controller('OrdersController', OrdersController);

    function OrdersController($stateParams, customerInfo) {
        console.log('customerInfo',customerInfo)
        console.log(customerInfo.name);
        console.log(customerInfo.city);
        console.log(customerInfo.orderTotal);
        // vm.total = customerInfo.orderTotal;


        console.log('in', $stateParams.customerId);
            var vm = this;
            vm.title = "Customer Orders " + $stateParams.customerId;
            vm.customer = $stateParams.customerId;

    }
}());


    