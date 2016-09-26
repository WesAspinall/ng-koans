function UserService($http) {

  var API = '//jsonplaceholder.typicode.com/users/';

 this.getUser = function (userId) {
   return $http
      .get(API + userId)
      .then((res) => res.data);
  }




}

angular
  .module('app')
  .service('UserService', UserService);

  // a factory allows us to run code before 
  // we return an object
  // module pattern

  // a service is a constructor function