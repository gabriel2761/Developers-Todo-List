var Hotkeys = function() {
    this.KEY = {
        13: 'enter',
        84: 't',
        191: '/'
    };
};

Hotkeys.prototype.listen = function(callback) {
    var KEY = this.KEY;
    $(document).keyup(function(event) {
        console.log(event.keyCode);
        callback(KEY[event.keyCode]);
    });
};

