let ErrCtrl = function() {
  let vm = this;

  vm.list = [{
    message: 'Oh no, an error occurred!',
    type: 'error'
  }, {
    message: 'Make sure you fill in all the fields.',
    type: 'warning'
  }, {
    message: 'This is invalid.',
    type: 'invalid'
  }];

};


angular
  .module('app')
  .controller('ErrCtrl', ErrCtrl);