var statelessComponent = {
  //one-way binding. from stateful, to stateless
  // new syntax: '<'

  // binding expressions with '&'
  bindings: {

    user: '<',
    onUpdate: '&'

  },

  controller: function() {
    
    // angular.copy breaks the binding between the 
    // parent and the child
    // treats the parent object data as immutable
    this.$onChanges = function(changes)  {
      if(changes.user) {
        this.user = angular.copy(this.user);
      }
    }

    this.updateUser = function() {
      this.onUpdate({
        $event: {
          user: this.user
        }
      });
    }
  },

  template: `
    <div>
      <input type='text' ng-model='$ctrl.user.name;'>
      <input type='text' ng-model='$ctrl.user.location;'>
      <a href='' ng-click='$ctrl.updateUser();'>Update</a>
    </div>
  `
};

angular
  .module('app')
  .component('statelessComponent', statelessComponent);

  //the us