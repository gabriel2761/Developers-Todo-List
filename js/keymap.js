var KeyMap = function() {
    this.Map = {
        13: 'enter',
        84: 't',
        191: '/'
    };
};

KeyMap.prototype.value = function(keyCode) {
    return this.Map[keyCode];
};