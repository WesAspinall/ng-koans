let Counter1Ctrl = function($scope) {
  let vm = this;
  vm.count = 0;
  vm.name = 'Drink counter';
  vm.updateName = updateName;
  vm.increment = increment;
  vm.decrement = decrement;

  function updateName() {
    if( vm.name === 'Food counter') {
      vm.name = 'Drink counter';
    } else if(vm.name === 'Drink counter') {
      vm.name = 'Food counter';
    }
    
  }

  function increment() {
    vm.count++;
  }

  function decrement() {
    vm.count --;
  }

};



angular
  .module('app')
  .controller('Counter1Ctrl', Counter1Ctrl);