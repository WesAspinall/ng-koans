function errorMessage() {

  return {

    restrict: 'A',

    // link: function($scope, $element, $attrs) {
    //   $element.addClass('error');
    //   $element.addClass('error--' + $attrs.type); //called twice ***
    // }

    compile: function($element, $attrs) {
      
      // RAW TEMPLATE
      // any manipulation done in the compile function
      // happens before the element is compiled, hence
      // there isn't $scope yet
      // but $compile gives us access to pre and post linking

      $element.addClass('error');
      console.log(1);

      // return {
      //   pre: function ($scope, $element, $attrs) {
      //     // access to child elements that haven't been compiled
      //   }
      //   post: function ($scope, $element, $attrs)  {
      //     // access to child elements that are linked
      //     // this is the exact same as the linking function
      //     $element.addClass('error--'+$attrs.type);
      //   }
      // };

      return function postLink($scope, $element, $attrs) {
        $element.addClass('error--'+$attrs.type);
        console.log(2);
      };

    }
  }
};

angular
  .module('app')
  .directive('errorMessage', errorMessage);

  // *** that line is called twice because
  // the linking function is called AFTER 
  // the element is compiled

  //the point of compile...
  // instead of adding a class every single time in the
  // link function, we add it once to the raw, uncompiled template


  //using $compile to manipulate the element
  //before we link to it