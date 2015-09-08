(function() {
    angular
        .module('app.services',[])
        .factory('customersFactory', customersFactory);

    function customersFactory($http, $log) {

        return {
            getCustomers: getCustomers
        };
        function getCustomers(){
            return $http.get('./Services/customers.json')
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
    }

}());

  