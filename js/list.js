var List = function(data) {
    this.listview = $('#listview');
    this.key = data.key;
    this.listname = data.listname;
    this.todos = [];
    this.index = 0;
};

List.prototype.getData = function() {
    return { key: this.key, listname: this.listname };
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
};

List.prototype.deleteSelectedTodo = function() {
    if (!this.hasTodos()) return;
    this.todos[this.index].remove();
    this.todos.splice(this.index, 1);
    if (!this.hasTodos()) return;

    if (this.index === 0) {
        this.todos[this.index].select();
    } else {
        this.todos[--this.index].select();
    }
};