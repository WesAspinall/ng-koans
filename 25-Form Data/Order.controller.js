let OrderCtrl = function() {
  let vm = this;
 
  vm.customerOrder = {
    name: '',
    email: '',
    location: '',
    product: {
      label: '',
      id: ''
    },
    comments: ''
  };
  
  vm.submitOrder = function() {
    //communicate with api
  }

};

angular
  .module('app')
  .controller('OrderCtrl', OrderCtrl);