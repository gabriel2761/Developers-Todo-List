var List = function(listname) {
    this.listname = listname;
    this.todos = [];
    this.index = 0;
};

List.prototype.hasTodos = function() {
    if (this.todos.length > 0) return true;
    return false;
};

List.prototype.makeTodo = function() {
    var self = this;
    var todos = this.todos;
    var todo = new Todo();

    if (self.hasTodos()) {
        self.todos[self.index].deselect();
    }

    todo.select();

    todo.make(function(result) {
        if (result === 'created') {
            todos.push(todo);
            self.index = todos.length - 1;
        } else if (result === 'cancelled') {
            self.todos[self.index].select();
        }
    });
};

List.prototype.render = function() {
    if (!this.hasTodos()) return;
    this.todos[this.index].select();
    this.todos.forEach(function(todo) {
        todo.render();
    });
};

List.prototype.up = function() {
    if (!this.hasTodos()) return;
    this.todos[this.index].deselect();
    if (this.index === this.todos.length - 1) {
        this.index = -1;
    }
    this.todos[++this.index].select();
};

List.prototype.down = function() {
    if (!this.hasTodos()) return;
    this.todos[this.index].deselect();
    if (this.index === 0) {
        this.index = this.todos.length;
    }
    this.todos[--this.index].select();
};