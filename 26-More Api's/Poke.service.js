let PokeService = function($http) {

  let API = 'http://pokeapi.co/api/v2/pokemon/';

  this.getPokes = getPokes;

  function getPokes() {
    return $http.get(API, {cached: true})
                .then((res) => res.data.results.splice(0,10));
  }
  

};

angular
  .module('app')
  .service('PokeService', PokeService);