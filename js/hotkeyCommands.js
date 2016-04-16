var HotKeys = function() {
    this.newListInput = new NewListInput();
    this.navigationBar = new NavigationBar();
    this.key = {
        'l': 76,
        't': 84,
        'i': 73
    };
};

HotKeys.prototype.initialize = function() {
    var self = this;

    // Single key press
    $(document).keyup(function(event) {

    });

    // Ctrl key press
    $(document).keyup(function(event) {
        if (!event.ctrlKey) return;

        var key = self.key;
        switch (event.keyCode) {
            case key.l:
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
    this.newListInput.render();
    this.navigationBar.render();
};


