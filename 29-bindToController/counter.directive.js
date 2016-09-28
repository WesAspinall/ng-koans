function counter() {
  return {
    scope: {},
    bindToController: {
      count: '='
    },
    template: `
      <div class='counter'>
        <h3>Counter: {{counter.count}} </h3>
        <a class='counter__increment' href='' ng-click='counter.increment()'>increment</a>
        <a class='counter__decrement' href='' ng-click='counter.decrement()'>decrement</a>
      </div>
    `,
    controller: 'CounterCtrl as counter'
  }
};

angular
  .module('app')
  .directive('counter', counter);