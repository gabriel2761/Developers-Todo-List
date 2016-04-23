var App = function() {
    this.hotkeys = new Hotkeys();
    this.inputListName = new InputListName();
    this.navbar = new Navbar();
    this.listview = new ListView();
};

App.prototype.initializeControls = function() {
    var self = this;
    self.hotkeys.listen(function(key) {
        var inputVisible = self.checkListNameInput(key);
        if (inputVisible) return;

        switch (key) {
            case '/':
                self.listview.makeTodo();
                break;

        }
    });
};

App.prototype.renderViews = function() {

};