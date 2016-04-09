var ListView = function() {
    var input = document.getElementById('todo-input'),
        list = document.getElementById('todo-list'),
        database = new Database();

    var self = this;
    input.addEventListener('keyup', function(event) {
        if (event.keyCode !== 13 || input.value === '') return;
        self.addItem(input, database);
        self.update(list, database);
    });

    self.update(list, database);
};

ListView.prototype.addItem = function(input, database) {
    database.addItem({
        title: input.value
    });
};

ListView.prototype.update = function(list, database) {
    list.innerHTML = '';

    database.getItems().forEach(function(data) {
        var item = new Item(data);
        list.appendChild(item.render());
    });
};

var Item = function(data) {
    this.id = data.id;
    this.title = data.title;
};

Item.prototype.render = function() {
    var element = document.createElement('section'),
        title = document.createTextNode(this.title);
    element.setAttribute("id", this.id);
    element.setAttribute("class", "list-item");
    element.appendChild(title);
    return element;
};

