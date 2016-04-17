var hotkey = hotkey || {};

hotkey.TOGGLE_NAV = 86;
hotkey.NEW_LIST = 84;
hotkey.TOGGLE_INFOBAR = 73;
hotkey.NAVBAR_LEFT = 72;
hotkey.NAVBAR_RIGHT = 76;
hotkey.DELETE_LIST = 68;

var HotKeys = function() {
    this.newListInput = new NewListInput();
    this.navigationBar = new NavigationBar();
    this.listview = null;
    this.key = {
        'v': hotkey.TOGGLE_NAV,
        't': hotkey.NEW_LIST,
        'i': hotkey.TOGGLE_INFOBAR,
        'h': hotkey.NAVBAR_LEFT,
        'l': hotkey.NAVBAR_RIGHT,
        'd': hotkey.DELETE_LIST
    };
};

HotKeys.prototype.initialize = function() {
    this.createSingleKeyListeners();
    this.createCtrlKeyListeners();
    this.createCtrlShiftKeyListeners();
};

HotKeys.prototype.createSingleKeyListeners = function() {
    $(document).keyup(function(event) {
        console.log(event.keyCode);
    });
};

HotKeys.prototype.createCtrlKeyListeners = function() {
    var self = this;
    var key = self.key;
    $(document).keyup(function(event) {
        if (!event.ctrlKey) return;
        switch (event.keyCode) {
            case key.v:
                self.toggleNavigationBar();
                break;
            case key.t:
                self.newList();
                break;
            case key.i:
                self.toggleListInfo();
                break;
            case key.h:
                self.navbarLeft();
                break;
            case key.l:
                self.navbarRight();
                break;
        }
    });
};

HotKeys.prototype.createCtrlShiftKeyListeners = function(first_argument) {
    var self = this;
    var key = self.key;
    $(document).keyup(function(event) {
        if (!event.ctrlKey && !event.shiftKey) return;
        switch (event.keyCode) {
            case key.d:
                self.removeList();
                break;
        }
    });
};

HotKeys.prototype.attachViews = function() {

};

HotKeys.prototype.render = function() {
    this.navigationBar.render();
    this.newListInput.render();
    this.listview = this.navigationBar.renderList();
    this.listview.render();
};


