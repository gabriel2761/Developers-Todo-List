var ListView = function() {
    this.element = $('#listview');
    this.todos = [];
};

ListView.prototype.makeTodo = function() {
    var todos = this.todos;
    var todo = new Todo();
    todo.make(function(created) {
        if (created) todos.push(todo);
    });
};

