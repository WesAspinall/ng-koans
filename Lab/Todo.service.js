function TodoService($http) {

  var API = '//jsonplaceholder.typicode.com/todos/';



  function retrieve() {
    return $http
            .get(API)
            .then((res) => {
              return res.data.splice(0,10);
            });
  }

  

return {
  retrieve: retrieve
}

}

angular
  .module('app')
  .factory('TodoService', TodoService);