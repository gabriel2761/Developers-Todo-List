var ListView = function() {
    this.input = document.getElementById('todo-input');
    this.list = document.getElementById('todo-list');
    this.database = new Database();

    var self = this;
    self.input.addEventListener('keyup', function(event) {
        if (event.keyCode !== 13 || self.input.value === '') return;
        self.addItem();
        self.update();
    });
};

ListView.prototype.addItem = function() {
    this.database.addItem({
        title: this.input.value
    });
};

ListView.prototype.update = function() {
    var self = this;
    self.list.innerHTML = '';

    self.database.getItems().forEach(function(data) {
        var item = new Item(data, self);
        self.list.appendChild(item.render());
    });
};

var Item = function(data, listview) {
    this.id = data.id;
    this.title = data.title;
    this.listview = listview;
};

Item.prototype.render = function() {
    var self = this;

    var element = document.createElement('section'),
        trash = document.createElement('p');

    var remove = document.createTextNode('X'),
        title = document.createTextNode(this.title);

    element.setAttribute("id", this.id);
    element.setAttribute("class", "list-item");
    element.appendChild(title);

    trash.appendChild(remove);
    element.appendChild(trash);

    trash.addEventListener('click', function() {
        var database = new Database();

        database.removeItem(self.id);
        self.listview.update();

    });

    return element;
};

