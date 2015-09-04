(function() {
    'use strict';
    angular
        .module('app.orders')
        .controller('OrdersController', OrdersController);

    // MainController.$inject = [ 'SessionService'];

    function OrdersController() {
    console.log('in orders');
            var vm = this;
            console.log('in the controller');
            vm.title = "Customer Orders";
        
    }
}());


    