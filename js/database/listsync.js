var ListSync = function(key) {
    this.key = key;
    var todos = JSON.parse(localStorage.getItem(this.key));
    if (todos === null) localStorage.setItem(this.key, JSON.stringify([]));
};

ListSync.prototype.getTodos = function() {
    return JSON.parse(localStorage.getItem(this.key));
};

ListSync.prototype.setTodos = function(todos) {
    localStorage.setItem(this.key, JSON.stringify(todos));
};

ListSync.prototype.syncTodos = function(todos) {
    var data = [];
    todos.forEach(function(todo) {
        data.push(todo.getData());
    });
    this.setTodos(data);
};

