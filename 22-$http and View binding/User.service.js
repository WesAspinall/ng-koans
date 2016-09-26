function UserService($http) {

  var API = '//jsonplaceholder.typicode.com/users/';

  function getUser(userId) {
   return $http
      .get(API + userId)
      .then((res) => res.data);
  }

  function getAllUsers() {

  }

  return {
    getUser: getUser;
  }

}

angular
  .module('app')
  .factory('UserService', UserService);

  // a factory allows us to run code before 
  // we return an object
  // module pattern

  // a service is a constructor function