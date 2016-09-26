let TodoCtrl = function(TodoService) {
  
  let vm = this;
  vm.title = 'Todo List';
  vm.list = [];
  vm.newTodo = '';
  vm.toggleState = toggleState;
  vm.addTodo = addTodo;
  vm.getTodos = getTodos;
  vm.removeTodo = removeTodo;
  vm.updateTodo = updateTodo;
  vm.activate = activate;
  activate();

  function activate() {
    getTodos();
  }

  function getTodos() {
    TodoService.retrieve().then((res) => {
      vm.list = res;
      return vm.list;
    });
  }

  function removeTodo(item, index) {
    TodoService
      .remove(item)
      .then((res) => vm.list.splice(index, 1));
  }

  function addTodo() {

    if(!vm.newTodo) {
      return;
    }

    TodoService
      .create({
        title: vm.newTodo,
        completed: false
      })
      .then((res) => {
        vm.list.unshift(res);
        vm.newTodo = '';
      });
  }

  function updateTodo(item, index) {
    if (!item.title) {
      vm.removeTodo(item, index);
    }

     TodoService
      .update(item);
  }

  function toggleState() {
    TodoService
      .update(item)
      .then((res) => {

      }, () => {
        item.completed = !item.completed;
      })

  }

};


angular
  .module('app')
  .controller('TodoCtrl', TodoCtrl);