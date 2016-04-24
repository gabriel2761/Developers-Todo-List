var KeyMap = function() {
    this.Map = {
        13: 'enter',
        84: 't',
        191: '/',
        76: 'l',
        72: 'h',
        74: 'j',
        75: 'k',
        68: 'd'
    };
};

KeyMap.prototype.value = function(keyCode) {
    return this.Map[keyCode];
};