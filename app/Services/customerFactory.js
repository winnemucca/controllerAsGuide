// (function() {
//     angular
//         .module('app.services',[])
//         .factory('customersFactory', customersFactory);

//     function customersFactory($http, $log) {

//         return {
//             getCustomers: getCustomers
//         };
//         function getCustomers(){
//             return $http.get('./Services/customers.json',{catch: true})
//                 .then(getCustomerListComplete)
//                 .catch(getCustomerListFailed);

//                 function getCustomerListComplete(response) {
//                     console.log('response.data',response.data);
//                     return response.data;
//                 }

//                 function getCustomerListFailed(error) {
//                     console.log('error', error);
//                 }
//         }
//     }
// }());


(function() {
    angular
        .module('app.services',[])
        .factory('customersFactory', customersFactory);

    function customersFactory($http, $log) {

        return {
            getCustomers: getCustomers,
            getCustomer: getCustomer
        };
        function getCustomers(){
            return $http.get('./Services/customers.json',{catch: true})
                .then(getCustomerListComplete)
                .catch(getCustomerListFailed);

                function getCustomerListComplete(response) {
                    console.log('response.data',response.data);
                    return response.data;
                }

                function getCustomerListFailed(error) {
                    console.log('error', error);
                }
        }

        function getCustomer(id) {
            console.log('id',id);
            var url = './Services/customers.json';
            return $http.get(url, {
                catch: true
            })
            .then(function(response) {
                console.log('response',response);
                var data = response.data;
                var customer = _.find(data, {"id":id})
                console.log('customer', customer);
                return customer;
            })
        }
    }
}());
