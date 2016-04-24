App.prototype.makeList = function() {
    var self = this;
    self.inputListName.make(function(listname) {
        if (listname === null) return;
        self.navbar.addTab(listname);
        self.navbar.render();
        self.listview.makeList(listname);
    });
};