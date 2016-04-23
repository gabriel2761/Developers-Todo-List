App.prototype.makeList = function() {
    var self = this;
    self.inputListName.make(function(result) {
        if (result === null) return;
        self.navbar.addTab(result);
        self.navbar.render();
    });
};