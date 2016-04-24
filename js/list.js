var List = function(listname) {
    this.listname = listname;
    this.todos = [];
};

List.prototype.makeTodo = function() {
    var todos = this.todos;
    var todo = new Todo();
    todo.make(function(created) {
        if (created) todos.push(todo);
    });
};

List.prototype.render = function() {
    this.todos.reverse().forEach(function(todo) {
        todo.render();
    });
};