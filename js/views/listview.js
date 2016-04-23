var ListView = function() {
    this.element = $('#listview');
    this.todos = [];
};

ListView.prototype.makeTodo = function() {
    var todo = new Todo();
    todo.make();
};

