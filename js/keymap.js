var KeyMap = function() {
    this.Map = {
        13: 'enter',
        27: 'esc',
        84: 't',
        191: '/',
        76: 'l',
        72: 'h',
        74: 'j',
        75: 'k',
        68: 'd',
        69: 'e'
    };
    this.shiftMap = {
        68: 'shift+d',
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