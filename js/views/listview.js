var ListView = function() {
    this.element = $('#listview');
    this.lists = [];
    this.index = 0;
};

ListView.prototype.makeList = function(listname) {
    this.lists.push(new List(listname));
};

ListView.prototype.makeTodo = function() {
    if (this.hasNoLists()) return;
    this.lists[0].makeTodo();
};

ListView.prototype.hasNoLists = function() {
    if (this.lists.length > 0) return false;
    return true;
};

ListView.prototype.nextList = function() {
    if (this.hasNoLists()) return;
    this.element.empty();
    if (this.index === this.lists.length - 1) {
        this.index = -1;
    }
    this.lists[++this.index].render();
};

ListView.prototype.prevList = function() {
    if (this.hasNoLists()) return;
    this.element.empty();
    if (this.index === 0) {
        this.index = this.lists.length;
    }
    this.lists[--this.index].render();
};