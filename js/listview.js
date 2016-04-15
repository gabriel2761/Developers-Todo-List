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

