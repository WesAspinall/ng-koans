describe('TodoController', function() {
  var $controller, TodoController;

  beforeEach(module('app'));

  beforeEach(inject(function($injector) {
    $controller = $injector.get('$controller');
    var $scope = {};

    // mock the todo
    var TodoService = function() {};

    TodoService.prototype.$save = function() {};

    TodoService.query = function() {
      return {
        $promise: {
          then: function(callback) {
            callback([{
                id: 1,
                title: 'Example Todo',
                userId: 1
            }]);
          }
        }
      }
    };

    TodoService.delete = function() {
      return true;
    }

    //instantiate the controller
    TodoController = $controller('TodoController as todo', {
      $scope: $scope,
      TodoService: TodoService

    });
  }));

  it('should have get items from the service', function() {
    var resp = TodoController.getTodos();

    expect(TodoController.list[0]).toEqual({
      id: 1,
      title: 'Example Todo',
      userId: 1
    })
  });

  it('should delete the item from the service', function() {
    TodoController.deleteTodo(1);

    expect(TodoController.list.length).toEqual(0);
  });

  it('should create a new item', function() {
    TodoController.title = 'Example Title';

    TodoController.newTodo();
    expect(TodoController.list.length).toEqual(1);
  });

});