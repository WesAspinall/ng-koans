function counter() {
  return {
    scope: {},
    bindToController: {
      count: '='
    },
    controller: function() {
      this.increment = function() {
        this.count++;
      };
      this.decrement = function() {
        this.count--;
      };

    },
    controllerAs: 'counter',
    template: `
      <div class='todo'>
        <button type='button' ng-click='counter.decrement();'>
        <input type='text' ng-model='counter.count'>
        <button type='button' ng-click='counter.increment();'>
      </div>
    `
  };
}

angular
  .module('app')
  .directive('counter', counter);