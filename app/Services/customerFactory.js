(function() {
    angular
        .module('app.services',[])
        .constant('_', window._)
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
            var url = './Services/customers.json';
            return $http.get(url, {
                catch: true
            })
            .then(function(response) {
                console.log('promise id',id);
                var data = response.data;
                for(var i =0, len=data.length;i<len;i++) {
                    console.log('data[i].id',data[i].id);
                    if(data[i].id === parseInt(id)) {
                        console.log('data[i]', data[i]);
                        return data[i];
                    }
                }
            })
        }
    }
}());
