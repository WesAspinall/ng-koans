function Tabs() {

  return {
   transclude: true,
   template: `
    <div class='tabs'>
      <ul class='tabs__list'>
        <li ng-repeat='tab in tabs.list'>
          <a href='' ng-click='tabs.selectTab($index);'>
            {{ tab.label }}
          </a>
        </li>
      </ul>
      <div class='tabs__content' ng-transclude></div>
   `,
   controller: function()  {
    let ctrl = this;
    ctrl.list = [];

    ctrl.addTab = function(tab) {
      if(!ctrl.list.length) {
        tab.selected = true;
      }
      ctrl.list.push(tab);
    }
    ctrl.selectTab = function($index) {
      ctrl.list.forEach(function(tab) {
        tab.selected = false;
      });
      
      ctrl.list[$index].selected = true;
    };
   },
   controllerAs: 'tabs'
  }
};

angular
  .module('app')
  .directive('tabs', Tabs);

// the element with ng-transclude is where
// all the individual tabs will be injected