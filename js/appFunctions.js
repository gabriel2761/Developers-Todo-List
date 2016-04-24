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