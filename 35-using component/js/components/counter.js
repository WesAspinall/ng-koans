var counter = {
  bindings: {
    count: '='
  },
  // transclude: true,
  // require: {'^^parent'},
  controller: function() { //the same for directive
    this.increment = function() {
      this.count++;
    };
    this.decrement = function() {
      this.count--;
    };
  },
  template: `
      <div class='todo'>
        <button type='button' ng-click='$ctrl.decrement();'>
        <input type='text' ng-model='$ctrl.count'>
        <button type='button' ng-click='$ctrl.increment();'>
      </div>
    `
    //templates are also the same
};

angular
  .module('app')
  .component('counter', counter)

//refactor directives to components

// what to do with isolate scope and bindToController?
//we've established that bindToController is the best way to pass
// properties down into our new directives...
//
//In the component we use the bindings property which 
// has an object as the value

//Instead of the controller as  syntax, components
// have the default $ctrl

// components are always isolate scoped.

// components don't have link functions, instead they have 
// life-cyle hooks