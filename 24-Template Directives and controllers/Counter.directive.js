function counter() {

  return {

    scope: {},
    bindToController: {
      title: '@name',
      count: '=' // '=count'
    },
    restrict: 'E',
    controller: 'CounterCtrl as counter',
    template: `
      <div>
      {{counter.title}}
        <input type='text' ng-model='counter.count'>
        <button type='button' ng-click='counter.increment();'> + </button>
        <button type='button' ng-click='counter.decrement();'> - </button>
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