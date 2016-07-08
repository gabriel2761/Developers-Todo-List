var KeyMap = function() {
    this.Map = {
        13: 'enter',
        27: 'esc',
        84: 't',
        73: 'i',
        76: 'l',
        72: 'h',
        74: 'j',
        75: 'k',
        88: 'x',
        67: 'c'
    };
    this.shiftMap = {
        88: 'shift+x',
        74: 'shift+j',
        75: 'shift+k',
        76: 'shift+l',
        72: 'shift+h',
    };
};

KeyMap.prototype.value = function(keyCode) {
    if (event.shiftKey) return;
    return this.Map[keyCode];
};

KeyMap.prototype.shiftValue = function(keyCode) {
    if (!event.shiftKey) return;
    return this.shiftMap[keyCode];
};