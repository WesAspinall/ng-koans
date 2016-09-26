let MainCtrl = function() {
  let vm = this;
  

  vm.person = {
    name: 'Wes Aspinall',
    location: 'Miami, FL'
  }

};

MainCtrl.$inject = [];

angular
  .module('app')
  .controller('MainCtrl', MainCtrl);

