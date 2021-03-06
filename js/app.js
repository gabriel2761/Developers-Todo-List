var App = function() {
    this.hotkeys = new Hotkeys();
    this.inputListName = new InputListName();
    this.navbar = new Navbar();
    this.listview = new ListView();
    this.datasync = new DataSync();
};

App.prototype.initializeControls = function() {
    var self = this;
    self.hotkeys.listen(function(key) {

        switch (key) {
            case 't':
                self.makeList();
                break;
            case 'i':
                self.listview.makeTodo();
                break;
            case 'l':
                self.next();
                break;
            case 'h':
                self.prev();
                break;
            case 'j':
                self.listview.down();
                break;
            case 'k':
                self.listview.up();
                break;
            case 'x':
                self.listview.deleteSelectedTodo();
                break;
            case 'shift+x':
                self.deleteList();
                break;
            case 'shift+j':
                self.listview.moveTodoDown();
                break;
            case 'shift+k':
                self.listview.moveTodoUp();
                break;
            case 'shift+h':
                self.moveListLeft();
                break;
            case 'shift+l':
                self.moveListRight();
                break;
            case 'c':
                self.editItem();
                break;
        }

        console.log(key);
    });
};
