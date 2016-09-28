function contactCard() {

  return {
    transclude: true,
    template: `
      <div>
        <h1>contact</h1>
        <div ng-transclude></div>
      </div>
    `
  }
};

angular
  .module('app')
  .directive('contactCard', contactCard);

