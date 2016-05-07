var List = function(data) {
    this.listview = $('#listview');
    this.key = data.key;
    this.listsync = new ListSync(data.key);
    this.listname = data.listname;
    this.todos = [];
    this.index = 0;
};

List.prototype.load = function() {
    var self = this;
    this.listsync.getTodos().forEach(function(data) {
        var todo = new Todo();
        todo.create(data);
        self.todos.push(todo);
    });
    if (this.hasTodos()) this.index = this.todos.length - 1;
};

List.prototype.save = function() {
    var todos = [];
    this.todos.forEach(function(todo) {
        todos.push(todo);
    });
    this.listsync.syncTodos(todos);
};

List.prototype.getData = function() {
    return { key: this.key, listname: this.listname };
};

List.prototype.hasTodos = function() {
    if (this.todos.length > 0) return true;
    return false;
};

List.prototype.editTodo = function() {
    var self = this;
    self.todos[this.index].edit(function(changed) {
        if (changed) self.save();
    });
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
            self.save();
        } else if (result === 'cancelled') {
            if (self.hasTodos()) {
                self.todos[self.index].select();
            }
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
    if (this.index === this.todos.length - 1) return;
    this.todos[this.index].deselect();
    this.todos[++this.index].select();
};

List.prototype.down = function() {
    if (!this.hasTodos()) return;
    if (this.index === 0) return;
    this.todos[this.index].deselect();
    this.todos[--this.index].select();
    this.render();
};

List.prototype.moveTodoUp = function() {
    if (!this.hasTodos()) return;
    if (this.index === this.todos.length - 1) return;

    this.listview.empty();
    this.todos[this.index].deselect();

    var temp = this.todos[this.index + 1];
    this.todos[this.index + 1] = this.todos[this.index];
    this.todos[this.index] = temp;

    this.index++;
    this.todos[this.index].select();
    this.render();
    this.save();
};

List.prototype.moveTodoDown = function() {
    if (!this.hasTodos()) return;
    if (this.index === 0) return;

    this.listview.empty();
    this.todos[this.index].deselect();

    var temp = this.todos[this.index - 1];
    this.todos[this.index - 1] = this.todos[this.index];
    this.todos[this.index] = temp;

    this.index--;
    this.todos[this.index].select();
    this.render();
    this.save();
};

List.prototype.deleteSelectedTodo = function() {
    if (!this.hasTodos()) return;
    this.todos[this.index].remove();
    this.todos.splice(this.index, 1);
    this.save();
    if (!this.hasTodos()) return;

    if (this.index === 0) {
        this.todos[this.index].select();
    } else {
        this.todos[--this.index].select();
    }
};