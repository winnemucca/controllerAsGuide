(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomerController', CustomerController);

    function CustomerController($stateParams) {
        console.log('in');
            var vm = this;
            vm.sortBy = 'name';
            vm.reverse = false;
            vm.doSort = doSort;

            vm.customers = [
                {
                    id: 1,
                    name: 'john', 
                    city: 'chandler', 
                    orderTotal: 10.00, 
                    joined: '2000-12-02',
                    orders : 
                        {
                            id: 1,
                            product: 'Shoes',
                            total: 9.9956
                        }
                },
                {
                    id:2,
                    name: 'Zed', 
                    city: 'Las Vegas', 
                    orderTotal: 10.90, 
                    joined: '1999-12-01',
                    orders: 
                        {
                            id:2,
                            product: 'Baseballs',
                            total: 10.90
                        }
                },
                {
                    id:3,
                    name: 'john', 
                    city: 'New York', 
                    orderTotal: 11.00, 
                    joined: '2000-11-02',
                    orders: 
                        {
                            id:3,
                            product: 'comb',
                            total: 11.00
                        }
                },
                {
                    id:4,
                    name: 'john', 
                    city: 'Seatle', 
                    orderTotal: 20.00, 
                    joined: '2000-02-02',
                    orders: 
                        {
                            id:4,
                            product: 'baseball cards',
                            total: 25.00
                        }
                }
            ];
        
            function doSort(propName) {
                vm.sortBy=propName;
                vm.reverse=!vm.reverse
            }
    }
})();


    
