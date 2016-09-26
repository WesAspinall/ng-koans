function todoAutofocus() {

  return  {
    restrict: 'A',
    scope: false, //inherits scope of current context
    link: function ($scope, $element, $attrs) {
      $scope.$watch($attrs.todoAutofocus, function(newVal, oldVal) {
        if(!newVal) {
          return;
        }
        
        setTimeout(function(){
          $element[0].focus();
        },0);

      });
    }
  }
}

angular
  .module('app')
  .directive('todoAutofocus', todoAutofocus)