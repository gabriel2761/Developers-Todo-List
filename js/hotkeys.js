var Hotkeys = function() {
    this.element = $('#hotkey-command-focus');
    this.element.focus();
    this.keymap = new KeyMap();
};

Hotkeys.prototype.focus = function() {
    this.element.focus();
};

Hotkeys.prototype.listen = function(callback) {
    var self = this;
    $(document).click(function(event) {
        self.element.focus();
    });
    self.element.keyup(function(event) {
        console.log(event.keyCode);
        callback(self.keymap.value(event.keyCode));
    });
};


