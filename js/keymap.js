var KeyMap = function() {
    this.Map = {
        13: 'enter',
        84: 't',
        191: '/',
        76: 'l',
        72: 'h'
    };
};

KeyMap.prototype.value = function(keyCode) {
    return this.Map[keyCode];
};