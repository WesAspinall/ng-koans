let PokeCtrl = function(PokeService) {
  let vm = this;

  vm.list = [];
  vm.getPokes = getPokes;
  vm.activate = activate;
  activate();

  function activate() {
    getPokes();
  }

  function getPokes(url) {
    PokeService
    .getPokes(url)
    .then((res) => vm.list = res);
  }


};


angular
  .module('app')
  .controller('PokeCtrl', PokeCtrl);