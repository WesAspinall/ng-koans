let CounterCtrl = function() {
  let vm = this;

  vm.increment = increment;
  vm.decrement = decrement;

  function increment() {
    vm.count++;
  }

  function decrement() {
    vm.count--;
  }
  
};


angular
  .module('app')
  .controller('CounterCtrl', CounterCtrl);