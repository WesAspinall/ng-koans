let tab = {
  bindings: {
    label: '@'
  },
  require: {
    tabs: '^^tabs'
  },
  transclude: true,
  template: `
    <div class='tabs__content' ng-if='$ctrl.tab.selected'>
    <div ng-transclude></div>
    </div>
  `,
  controller: function() {
    this.tab = {
      label: this.label,
      selected: false
    };
    this.$onInit = function () {
      this.tabs.addTab(this.tab);
    };
  }
};

angular
  .module('app')
  .component('tab', tab);


  // we don't have to use link functions
  // or $scope with components

  // we are using require to request
  // the parent controller (each tab is a child component)

  //Remember
  //  require: {
  //   tabs: '^^tabs'
  // }

  // the double ^^ means look at the parent