var hotkey = hotkey || {};

hotkey.ENTER = 13;
hotkey.TOGGLE_NAV = 86;
hotkey.NEW_LIST = 84;
hotkey.TOGGLE_INFOBAR = 73;
hotkey.NAVBAR_LEFT = 72;
hotkey.NAVBAR_RIGHT = 76;
hotkey.DELETE_LIST = 68;
hotkey.CREATE_TODO_ITEM = 191;
hotkey.CREATE_TODO_ITEM2 = 78;
hotkey.ITEM_UP = 75;
hotkey.ITEM_DOWN = 74;

var HotKeys = function() {
    this.newListInput = new NewListInput();
    this.navigationBar = new NavigationBar();
    this.listview = null; // TODO: ADD STATISTICS PAGE
    this.singlekeys = {
        'fslash': hotkey.CREATE_TODO_ITEM,
        'j': hotkey.ITEM_DOWN,
        'k': hotkey.ITEM_UP,
        'h': hotkey.NAVBAR_LEFT,
        'l': hotkey.NAVBAR_RIGHT,
    };
    this.ctrlkeys = {
        'v': hotkey.TOGGLE_NAV,
        't': hotkey.NEW_LIST,
        'i': hotkey.TOGGLE_INFOBAR,
        'n': hotkey.CREATE_TODO_ITEM2,
    };
    this.ctrlshiftkeys = {
        'd': hotkey.DELETE_LIST,
    };

};

HotKeys.prototype.initialize = function() {
    this.createSingleKeyListeners();
    this.createCtrlKeyListeners();
    this.createCtrlShiftKeyListeners();
    this.attachViews();
};

HotKeys.prototype.createSingleKeyListeners = function() {
    var self = this;
    var key = self.singlekeys;
    $(document).keyup(function(event) {
        switch(event.keyCode) {
            case key.fslash:
                self.createTodoItem();
                break;
            case key.h:
                self.navbarLeft();
                break;
            case key.l:
                self.navbarRight();
                break;
        }
        console.log(event.keyCode);
    });
};

HotKeys.prototype.createCtrlKeyListeners = function() {
    var self = this;
    var key = self.ctrlkeys;
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
            case key.n:
                self.createTodoItem();
                break;
        }
    });
};

HotKeys.prototype.createCtrlShiftKeyListeners = function(first_argument) {
    var self = this;
    var key = self.ctrlshiftkeys;
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
    var self = this;
    this.newListInput.createList(function(listCreated) {
        if (!listCreated) return;
        self.listview.clear();
        self.navigationBar.render();
        self.navigationBar.moveLast();
        self.listview = self.navigationBar.renderList();
        self.listview.render();
    });
};

HotKeys.prototype.render = function() {
    this.navigationBar.render();
    this.newListInput.render();
    this.listview = this.navigationBar.renderList();
    this.listview.render();
};



