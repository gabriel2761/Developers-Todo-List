var ListView = function() {
    this.element = $('#listview');
    this.lists = [];
    this.index = 0;
};

ListView.prototype.makeList = function(listname) {
    var list = new List(listname);
    this.lists.push(list);
    this.index = this.lists.length - 1;
    this.element.empty();
    list.render();
};

ListView.prototype.makeTodo = function() {
    if (!this.hasLists()) return;
    this.lists[this.index].makeTodo();
};

ListView.prototype.hasLists = function() {
    if (this.lists.length > 0) return true;
    return false;
};

ListView.prototype.nextList = function() {
    if (!this.hasLists()) return;
    this.element.empty();
    if (this.index === this.lists.length - 1) {
        this.index = -1;
    }
    this.lists[++this.index].render();
};

ListView.prototype.prevList = function() {
    if (!this.hasLists()) return;
    this.element.empty();
    if (this.index === 0) {
        this.index = this.lists.length;
    }
    this.lists[--this.index].render();
};

ListView.prototype.up = function() {
    if (!this.hasLists()) return;
    this.lists[this.index].up();
};

ListView.prototype.down = function() {
    if (!this.hasLists()) return;
    this.lists[this.index].down();
};