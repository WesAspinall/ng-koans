let tabs = {

  transclude: true,

  controller: function() {
    this.tabs = [];

    //add tab
    this.addTab = function addTab(tab) {
      this.tabs.push(tab);
    };

    //select tab... called with ng-click
    //sets selected property to true
    this.selectTab = function selectTab(index) {
      for (var i = 0; i < this.tabs.length; i++) {
        this.tabs[i].selected = false;
      }
      this.tabs[index].selected = true;
    };
    
    // gets called when all
    // children have been rendered
    // inside the component
    // NOT a substitute for directives DOM manipulation
    this.$postLink = function() {
      this.selectTab(0);
    };

    this.$onDestroy = function() {

    };

  },

  template: `
    <div class='tabs'>
      <ul class='tabs__list'>
        <li ng-repeat='tab in $ctrl.tabs'>
        <a href=''
          ng-bind='tab.label'
          ng-click='$ctrl.selectTab($index);'></a>
        </li>
      </ul>
      <div class='tabs__content' ng-transclude></div>
    </div>
  `
};

angular
  .module('app')
  .component('tabs', tabs);