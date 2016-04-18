var ListView = function(key, label) {
    this.key = key;
    this.label = label;
    this.listinfo = $('#listinfo');
    this.listview = $('#listview');
    this.database = new Database();
};

ListView.prototype.createTodoItem = function() {
    var item = $('<section class="list-item"></section>');
    this.listview.prepend(item);
};

ListView.prototype.toggleInfoView = function() {
    this.listinfo.toggleClass('hidden');
};

ListView.prototype.render = function() {
    this.listinfo.empty();
    this.listinfo.append(this.label);
};

ListView.prototype.remove = function() {
    this.database.removeList(this.key);
};