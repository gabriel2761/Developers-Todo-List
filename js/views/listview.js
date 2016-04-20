var ListView = function(key, label, items) {
    this.key = key;
    this.label = label;
    this.items = [];
    this.listinfo = $('#listinfo');
    this.listview = $('#listview');
    this.database = new Database();
    this.renderItems(items);
};

ListView.prototype.renderItems = function(items) {
    var self = this;
    items.forEach(function(item) {
        var todo = new TodoItem();
        todo.create({
            title: item.title
        });
        self.items.push(todo);
    });
};

ListView.prototype.moveItemDown = function() {

};

ListView.prototype.moveItemUp = function() {

};

ListView.prototype.createTodoItem = function() {
    var self = this;
    var item = new TodoItem();
    item.make(function(values) {
        if (values === null) return;
        self.database.addTodo(self.key, values);
    });
    item.render();
};

ListView.prototype.toggleInfoView = function() {
    this.listinfo.toggleClass('hidden');
};

ListView.prototype.render = function() {
    this.listinfo.append(this.label);
    var items = this.items;
    if (items.length > 0) items[items.length - 1].focus();
    items.forEach(function(item) {
        item.render();
    });
};

ListView.prototype.clear = function() {
    this.listinfo.empty();
    this.listview.empty();
};

ListView.prototype.remove = function() {
    this.database.removeList(this.key);
};