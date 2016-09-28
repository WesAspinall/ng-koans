let MainCtrl = function() {
  let vm = this;
  
  vm.firstCount = 0;
  vm.secondCount = 0;
  vm.thirdCount = 0;

};



angular
  .module('app')
  .controller('MainCtrl', MainCtrl);