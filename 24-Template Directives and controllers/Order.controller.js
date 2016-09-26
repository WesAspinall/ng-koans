let OrderCtrl = function() {
  let vm = this;
  vm.orderName = 'Coca-Cola';
  vm.orderQuantity = 5;
  

};

angular
  .module('app')
  .controller('OrderCtrl', OrderCtrl);