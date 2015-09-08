// (function() {
//     angular
//         .module('app.services')
//         .factory('customFactory', customFactory);

//     function customFactory($http) {

//         return {
//             getCustomerList: getCustomerList
//         };
//         function getCustomerList(){
//             $http.get('./Services/customers.json')
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
//         getCustomerList();
//     }
// }());