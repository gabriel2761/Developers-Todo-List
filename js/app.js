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
            case 't':
                self.makeList();
                break;
            case '/':
                self.listview.makeTodo();
                break;
            case 'l':
                self.next();
                break;
            case 'h':
                self.prev();
                break;
        }

        console.log(key);
    });
};

App.prototype.renderViews = function() {

};