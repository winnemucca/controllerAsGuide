(function() {
    // 'use strict';
    angular
        .module('app.orders')
        .controller('OrdersController', OrdersController);

    function OrdersController($stateParams, customerInfo) {
        console.log('customerInfo',customerInfo)
        console.log('stateparams', $stateParams)
        console.log('total',customerInfo.orderTotal);
        console.log('orders',customerInfo.orders[0].product);

        var vm = this;
        vm.product = customerInfo.orders[0].product;
        vm.total = customerInfo.orderTotal;
        vm.customer = customerInfo.name.toUpperCase();

    }
}());


    