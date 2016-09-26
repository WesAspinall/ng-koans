let UserCtrl = function(UserService) {
  let vm = this;
  let API = 'http://jsonplaceholder.typicode.com/users/';

  vm.userId = '';
  vm.chosenUser = {};

  vm.getUser = getUser;

  function getUser() {

    if(!vm.userId) {
      return; 
    }
    UserService.getUser(vm.userId)
    .then((res) => vm.chosenUser = res);
  }

}


angular
  .module('app')
  .controller('UserCtrl', UserCtrl);