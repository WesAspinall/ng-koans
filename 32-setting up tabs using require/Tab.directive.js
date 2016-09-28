function Tab() {

  return {

    scope: {},
    transclude: true,
    template: `
      <div ng-if='tab.selected'>
        <div ng-transclude></div>
      </div>
    `,
    require: '^^tabs',
    link: function($scope, $element, $attrs, $ctrl) {
      $scope.tab = {
        label: $attrs.label,
        selected: false
      };
      $ctrl.addTab($scope.tab);
    }
  }
};

angular
  .module('app')
  .directive('tab', Tab);

// the require property 
// gives us access to 
// the tabs controller in the tabs directive

// ^ operator: angular will look for tabs controller
// in the current directive

// ^^ operator: only looks at parent;

// ? operator: Angular passes in the value null 
// if the ctrl is not found.

//because we used require, we can access functions
//on the parent controller via $ctrl (line 16)

//** we have the option of inheriting more than one
//controller by passing an array to require
// but, then we have to define each ctrller by referencing
// its index

//Ex. var tabCtrl = $ctrl[0];
//    var ngModelCtrl = $ctrl[1];