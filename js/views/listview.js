var ListView = function(key, label) {
    this.key = key;
    this.label = label;
    this.items = [];
    this.listinfo = $('#listinfo');
    this.listview = $('#listview');
    this.database = new Database();
    this.updateItems();
};

ListView.prototype.updateItems = function() {
    var self = this;
    self.items = [];
    items = this.database.getListItems(this.key);
    items.forEach(function(item) {
        var todo = new TodoItem();
        todo.create({
            title: item.title
        });
        self.items.push(todo);
    });
    return self.items;
};

ListView.prototype.moveItemDown = function() {
    this.items[this.focusIndex].removeFocus();
    if (this.focusIndex === 0) this.focusIndex = this.items.length;
    this.items[--this.focusIndex].focus();
};

ListView.prototype.moveItemUp = function() {
    this.items[this.focusIndex].removeFocus();
    if (this.focusIndex === this.items.length - 1)  this.focusIndex = -1;
    this.items[++this.focusIndex].focus();
};

ListView.prototype.createTodoItem = function() {
    var self = this;
    var item = new TodoItem();
    item.render();
    item.make(function(values) {
        if (values === null) return;
        self.database.addTodo(self.key, values);
        self.clear();
        self.render();
    });
};

ListView.prototype.toggleInfoView = function() {
    this.listinfo.toggleClass('hidden');
};

ListView.prototype.render = function() {
    this.listinfo.append(this.label);
    var items = this.updateItems();
    if (items.length > 0) {
        this.focusIndex = this.items.length - 1;
        items[this.focusIndex].focus();
    }
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