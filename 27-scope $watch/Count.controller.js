let CountCtrl = function($scope) {

  let vm = this;
  vm.count = 0;
  vm.countList = [];
  vm.increment = increment;
  vm.decrement = decrement;

  function increment() {


    vm.count++;
    vm.countList.unshift({id: vm.count})
  };

  function decrement() {


    vm.count--;
    vm.countList.unshift({id: vm.count})
  };

  $scope.$watchCollection(angular.bind(vm, () => {

    // return vm.count;
    return vm.countList;

  }), function(newVal, oldVal) {

    //prevents $scope.$watch from 
    //running when it doesn't need to on init
    if(newVal == oldVal) {
      return;
    }

    console.log(newVal, oldVal);

  }, true);

};


angular
  .module('app')
  .controller('CountCtrl', CountCtrl);

  //note that using $scope.$watch to monitor
  // the count is not a performant way of doing things
  // it's better to bind ng-click events
  // to the increment and decrement elements


  // use $scope only for events, and things like
  // $scope.$watch and $watch.$collection


  //passing 'true' at the end of $scope.$watch
  // is 'deep watch', which is monitoring
  // the changes of the objects inside the array
  // instead of just the array itself