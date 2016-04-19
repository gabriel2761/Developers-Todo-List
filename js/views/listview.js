var ListView = function(key, label, items) {
    this.key = key;
    this.label = label;
    this.items = items.reverse();
    this.listinfo = $('#listinfo');
    this.listview = $('#listview');
    this.database = new Database();
};

ListView.prototype.createTodoItem = function() {
    var self = this;
    var item = new TodoItem();
    self.listview.prepend(item.render());
    item.make(function(values) {
        if (values === null) return;
        self.database.addTodo(self.key, values);
    });
};

ListView.prototype.toggleInfoView = function() {
    this.listinfo.toggleClass('hidden');
};

ListView.prototype.render = function() {
    var self = this;
    self.listinfo.empty();
    self.listinfo.append(this.label);
    self.items.forEach(function(values) {
        var todo = new TodoItem();
        self.listview.append(todo.create(values));
    });
};

ListView.prototype.remove = function() {
    this.database.removeList(this.key);
};