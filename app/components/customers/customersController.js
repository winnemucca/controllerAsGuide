(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomerController', CustomerController);

    function CustomerController( ) {
        console.log('in');
            var vm = this;
            vm.sortBy = 'name';
            vm.reverse = false;
            vm.doSort = doSort;

            vm.customers = [
                {name: 'john', city: 'chandler', orderTotal: 10.00, joined: '2000-12-02'},
                {name: 'Zed', city: 'Las Vegas', orderTotal: 10.90, joined: '1999-12-01'},
                {name: 'john', city: 'New York', orderTotal: 11.00, joined: '2000-11-02'},
                {name: 'john', city: 'Seatle', orderTotal: 20.00, joined: '2000-02-02'}
            ];
        
            function doSort(propName) {
                vm.sortBy=propName;
                vm.reverse=!vm.reverse
            }
    }
})();


    
