App.prototype.makeList = function() {
    var self = this;
    self.inputListName.make(function(listname) {
        if (listname === null) return;
        self.navbar.addTab(listname);
        self.navbar.render();
        self.listview.makeList(listname);
    });
};

App.prototype.nextList = function() {
    this.listview.nextList();
};

App.prototype.prevList = function() {
    this.listview.prevList();
};

