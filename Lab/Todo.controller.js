let TodoCtrl = function(TodoService) {
  let vm = this;

  vm.list = [];
  vm.newTodo = '';

  vm.getTodos = getTodos;


  getTodos();
  function getTodos() {
    console.log(TodoService.retrieve());
    TodoService
      .retrieve()
      .then((res) => {
        vm.list = res;
      });
  }


};



TodoCtrl.$inject = [];

angular
  .module('app')
  .controller('TodoCtrl', TodoCtrl);