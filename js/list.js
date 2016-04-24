var List = function(listname) {
    this.listname = listname;
    this.todos = [];
    this.index = 0;
};

List.prototype.makeTodo = function() {
    var todos = this.todos;
    var todo = new Todo();
    todo.make(function(created) {
        if (created) todos.push(todo);
    });
};

List.prototype.render = function() {
    this.todos.forEach(function(todo) {
        todo.render();
    });
};

List.prototype.up = function() {

};

List.prototype.down = function() {

};