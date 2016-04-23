var App = function() {
    this.hotkeys = new Hotkeys();
    this.inputListName = new InputListName();
    this.navbar = new Navbar();
};

App.prototype.initializeControls = function() {
    var self = this;
    self.hotkeys.listen(function(key) {
        var inputVisible = self.checkListNameInput(key);
        if (inputVisible) return;

        console.log('commands enabled ' + key);
    });
};

App.prototype.renderViews = function() {

};