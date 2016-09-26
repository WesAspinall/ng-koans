function MoviesCtrl() {
  let vm = this;

  vm.favorites = [{
    title: 'The Shawshank Redemption',
    year: '1994'
  }, {
    title: 'Inception',
    year: '2010'
  }, {
    title: 'The Matrix',
    year: '1999'
  }, {
    title: 'Saving Private Ryan',
    year: '1998'
  }];

};

MoviesCtrl.$inject = [];

angular
  .module('app')
  .controller('MoviesCtrl', MoviesCtrl);