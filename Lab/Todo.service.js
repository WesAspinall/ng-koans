let TodoService = function($http) {

  var API = '//jsonplaceholder.typicode.com/todos/';

  this.create = create;
  this.retrieve = retrieve;
  this.update = update;
  this.remove = remove;


  function create(todo)  {
    return $http.post(API, todo).then((res) => res.data);
  }

  function retrieve() {
    return $http.get(API).then((res) => res.data.splice(0,10));
  }

  function update(todo) {
    return $http.put(API + todo.id).then((res) => res.data);
  }

  function remove(todo) {
    return $http.delete(API + todo.id).then((res) => res.data);
  }

}

angular
  .module('app')
  .service('TodoService', TodoService);