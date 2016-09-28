function contactCard() {

  return {
    transclude: true,
    template: `
      <div>
        <span></span>
        <div></div>
      </div>
    `,
    link: function($scope, $element, $attrs, $ctrl, $transclude) {
      var div = $element.find('div');
      var span = $element.find('span');
      var cloned = $transclude(function(elements) {
        elements[1].textContent = elements[1].textContent.toUpperCase();
      });

      console.log(cloned);
      span.append(cloned[1]);
      div.append(cloned[3]);
    }
  }
};

angular
  .module('app')
  .directive('contactCard', contactCard);

//automated single-slot transclusion with <div ng-transclude></div>

// ***manual transclusion with link:
// relies on accessing text nodes to inject
// content.  THis is problematic when we rely on the [index] when
// the code is
// minified because it gets rid of whitespace and therefore messes
// w the index
// 

