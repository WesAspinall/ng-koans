var statefulComponent = {

  template: `
    <div>
      <pre>{{ $ctrl.user | json }}</pre>
      <stateless-component
      user='$ctrl.user'
      on-update='$ctrl.updateUser($event);'
      ></stateless-component>
    </div>
  `,

  controller: function()  {

    this.user = {
      name: 'Wes Aspinall',
      location: 'Miami, FL'
    };
    
    this.updateUser = function(event) {
      this.user = event.user;
    };

  }


};

angular
  .module('app')
  .component('statefulComponent', statefulComponent);