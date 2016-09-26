let OrderFormCtrl = function() {
  let vm = this;

  this.products = [{
    label: 'Product One',
    id: 1
  }, {
    label: 'Product Two',
    id: 2
  }, {
    label: 'Product Three',
    id: 3
  }];

  this.onSubmit = function() {
    //pre-processing
    this.submit();
  };

};

angular
  .module('app')
  .controller('OrderFormCtrl', OrderFormCtrl);