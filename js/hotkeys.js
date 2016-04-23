var Hotkeys = function() {
    this.KEY = {
        13: 'enter',
        84: 't',
    };
};

Hotkeys.prototype.listen = function(callback) {
    var KEY = this.KEY;
    $(document).keyup(function(event) {
        callback(KEY[event.keyCode]);
    });
};

