(function() {
    'use strict';
    angular
        .module('app.orders')
        .controller('OrdersController', OrdersController);

    // MainController.$inject = [ 'SessionService'];

    function OrdersController($stateParams) {
    console.log('in orders');
            var vm = this;
            vm.title = "Customer Orders";
        
    }
}());


    