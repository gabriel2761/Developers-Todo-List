var hotkey = hotkey || {};

hotkey.TOGGLE_NAV = 86;
hotkey.NEW_LIST = 84;
hotkey.TOGGLE_INFOBAR = 73;


var HotKeys = function() {
    this.newListInput = new NewListInput();
    this.navigationBar = new NavigationBar();
    this.key = {
        'v': hotkey.TOGGLE_NAV,
        't': hotkey.NEW_LIST,
        'i': hotkey.TOGGLE_INFOBAR,
    };
};

HotKeys.prototype.initialize = function() {
    var self = this;

    // Single key press
    $(document).keyup(function(event) {
        console.log(event.keyCode);
    });

    // Ctrl key press
    $(document).keyup(function(event) {
        if (!event.ctrlKey) return;

        var key = self.key;

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
        }
    });
};

HotKeys.prototype.render = function() {
    this.navigationBar.render();
    this.newListInput.render(this.navigationBar);
};


