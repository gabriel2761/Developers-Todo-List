var App = function() {
    this.hotkeys = new Hotkeys();
    this.inputListName = new InputListName();
};

App.prototype.initializeControls = function() {
    var self = this;

    self.hotkeys.listen(function(key) {

        if (!self.inputListName.isHidden()) {
            if (key === 'enter') {
                self.inputListName.clear();
                self.inputListName.hide();
            }
            return;
        }

        if (key === 't' && self.inputListName.isHidden()) {
            self.inputListName.show();
            self.inputListName.focus();
            return;
        }



        console.log('commands enabled ' + key);
    });
};

App.prototype.renderViews = function() {

};