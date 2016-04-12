var ListView = function() {
    this.input = document.getElementById('todo-input');
    this.list = document.getElementById('todo-list');
    this.database = new Database();

    var self = this;

    self.input.addEventListener('keyup', function(event) {
        if (event.keyCode !== 13 || this.value === '') return;
        self.addItem();
        self.update();
        this.value = '';
    });

    document.addEventListener('keyup', function(event) {
        if (event.keyCode !== 191) return;
        self.input.focus();
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

    var item = document.createElement('section'),
        heading = document.createElement('h3'),
        title = document.createTextNode(this.title);

    var checkbox = document.createElement('div');

    var trash = document.createElement('p'),
        remove = document.createTextNode('X');

    checkbox.setAttribute('class', 'checkbox');
    item.appendChild(checkbox);

    item.setAttribute('class', 'list-item');
    item.setAttribute('draggable', 'true');
    heading.appendChild(title);
    heading.setAttribute('class', 'title');
    item.appendChild(heading);

    trash.setAttribute('class', 'trash');
    trash.appendChild(remove);
    item.appendChild(trash);

    trash.addEventListener('click', function() {
        var database = new Database();
        database.removeItem(self.id);
        self.listview.update();
    });

    return item;
};

