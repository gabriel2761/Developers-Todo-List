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
    this.shiftMap = {
        68: 'shift+d'
    };
};

KeyMap.prototype.value = function(keyCode) {
    return this.Map[keyCode];
};

KeyMap.prototype.shiftValue = function(keyCode) {
    return this.shiftMap[keyCode];
};