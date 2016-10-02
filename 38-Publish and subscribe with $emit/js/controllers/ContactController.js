function ContactController($scope) {

  var ctrl = this;
  ctrl.contacts = [];

  //down the scope
  ctrl.logoutUser = function () {
    $scope.$broadcast('logout', ctrl.contacts);
  };

  $scope.$on('login', function (event, data) {
    ctrl.contacts.push(data);
  });

}

angular
  .module('app')
  .controller('ContactController', ContactController);

  // we use things like emit and broadcast
  // for things that need to be global
  // like auth