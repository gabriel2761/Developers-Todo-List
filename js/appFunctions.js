App.prototype.load = function() {
    this.navbar.load();
    this.navbar.render();
    this.listview.load();
};

App.prototype.makeList = function() {
    var self = this;
    self.inputListName.make(function(listname) {
        if (listname === null) return;
        self.navbar.addTab(listname);
        self.navbar.render();
        self.listview.makeList(listname);
    });
};

App.prototype.next = function() {
    this.listview.nextList();
    this.navbar.nextTab();
};

App.prototype.prev = function() {
    this.listview.prevList();
    this.navbar.prevTab();
};

App.prototype.deleteList = function() {
    this.listview.deleteList();
    this.navbar.deleteTab();
};

App.prototype.moveListLeft = function() {
    this.navbar.moveTabLeft();
    this.listview.moveListLeft();
};

App.prototype.moveListRight = function() {
    this.navbar.moveTabRight();
    this.listview.moveListRight();
};

App.prototype.editItem = function() {
    this.listview.editItem();
};