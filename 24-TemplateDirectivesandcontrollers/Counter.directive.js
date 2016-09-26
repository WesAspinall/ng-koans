function counter() {

  return {
    
    scope: {},
    restrict: 'E',
    controller: 'CounterCtrl as vm',
    template: `
      <div>
        <input type='text' ng-model='vm.count'>
        <button type='button' ng-click='vm.increment();'> + </button>
        <button type='button' ng-click='vm.decrement();'> - </button>
      </div>
    `,
    link: function($scope, $element, $attrs) {
      this.count = 1;

      this.increment = increment;
      this.decrement = decrement;

      function increment() {
        this.count++;
      }

      function decrement() {
        this.count--;
      }
    }

  }
}

angular
  .module('app')
  .directive('counter', counter);