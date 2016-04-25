var ListView = function() {
    this.element = $('#listview');
    this.lists = [];
    this.index = 0;
    this.datasync = new DataSync();
};

ListView.prototype.load = function() {
    var self = this;
    this.datasync.getData().forEach(function(data) {
        self.lists.push(new List(data.listname));
    });
};

ListView.prototype.save = function() {
    this.datasync.syncLists(this.lists);
};

ListView.prototype.makeList = function(listname) {
    var key = Math.random().toString(36).substring(2);
    var list = new List({ key: key, listname: listname });
    this.lists.push(list);
    this.index = this.lists.length - 1;
    this.element.empty();
    list.render();
    this.save();
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

ListView.prototype.moveListLeft = function() {
    if (!this.hasLists()) return;
    if (this.index === 0) return;

    var temp = this.lists[this.index - 1];
    this.lists[this.index - 1] = this.lists[this.index];
    this.lists[this.index] = temp;

    this.index--;
};

ListView.prototype.moveListRight = function() {
    if (!this.hasLists()) return;
    if (this.index === this.lists.length - 1) return;

    var temp = this.lists[this.index + 1];
    this.lists[this.index + 1] = this.lists[this.index];
    this.lists[this.index] = temp;

    this.index++;
};

ListView.prototype.up = function() {
    if (!this.hasLists()) return;
    this.lists[this.index].up();
};

ListView.prototype.down = function() {
    if (!this.hasLists()) return;
    this.lists[this.index].down();
};

ListView.prototype.moveTodoUp = function() {
    this.lists[this.index].moveTodoUp();
};

ListView.prototype.moveTodoDown = function() {
    this.lists[this.index].moveTodoDown();
};

ListView.prototype.deleteSelectedTodo = function() {
    if (!this.hasLists()) return;
    this.lists[this.index].deleteSelectedTodo();
};

ListView.prototype.deleteList = function() {
    if (!this.hasLists()) return;
    this.element.empty();
    this.lists.splice(this.index, 1);
    if (!this.hasLists()) return;

    if (this.index === 0) {
        this.lists[this.index].render();
    } else if (this.index === this.lists.length - 1) {
        this.lists[this.index].render();
    } else {
        this.lists[--this.index].render();
    }
};