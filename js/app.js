var App = function() {
    this.hotkeys = new Hotkeys();
    this.inputListName = new InputListName();
    this.navbar = new Navbar();
    this.listview = new ListView();
};

App.prototype.initializeControls = function() {
    var self = this;
    self.hotkeys.listen(function(key) {

        switch (key) {
            case '/':
                self.listview.makeTodo();
                break;
        }

        console.log(key);
    });
};

App.prototype.renderViews = function() {

};