let CounterCtrl = function() {
  let vm = this;
  
  vm.count = 1;
  
  vm.increment = increment;
  vm.decrement = decrement;

  function increment() {
    vm.count ++;
  }

  function decrement() {
    vm.count --;
  }

};

angular
  .module('app')
  .controller('CounterCtrl', CounterCtrl);

  //counter dir must acces sc