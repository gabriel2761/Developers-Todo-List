var App = function() {
    this.hotkeys = new Hotkeys();
    this.inputListName = new InputListName();
};

App.prototype.initializeControls = function() {
    var self = this;

    self.hotkeys.listen(function(key) {
        var inputVisible = false;

        self.inputListName.checkVisible(key, function(result) {
            if (result) inputVisible = true;
        });

        if (inputVisible) return;

        console.log('commands enabled ' + key);
    });
};

App.prototype.renderViews = function() {

};