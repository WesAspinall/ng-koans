function todoApp() {
  return {
    restrict: 'E',
    controller: 'TodoCtrl as vm',
    template: `

    <div>
    <h1>{{::vm.viewTitle}}</h1>

   <form class='todo__form' 
         ng-submit='vm.addTodo();'>

    <input type='text' 
        ng-model='vm.newTodo'
        placeholder='add new todo'>
        <button>add new todo</button>
   </form>

    <ul class='todo__list'>
        <li ng-repeat='item in vm.list'>

            <input 
                type='checkbox' 
                id='todo-{{$index}}'
                ng-model='item.completed'
                ng-change='vm.toggleState(item)'>

            <label 
                class='toggle' 
                for='todo-{{$index}}'>
            </label>

            <span 
                ng-dblclick='showEditField = true'
                ng-hide='showEditField'>
            {{item.title}}
            </span>

            <div ng-show='showEditField'>
                <input 
                    type='text' 
                    ng-model='item.title'
                    ng-blur='vm.updateTodo(item, $index); showEditField = false'
                    todo-autofocus='showEditField'>
            </div>

            <a href="" 
                ng-click="vm.removeTodo(item, $index);">
                &#215;
            </a>

        </li>
    </ul>

</div>
    `
  }
}

angular
  .module('app')
  .directive('todoApp', todoApp);