var HotKeys = function() {
    this.newListInput = new NewListInput();
    this.navigationBar = new NavigationBar();
    this.key = {
        'l': 76,
        't': 84,
        'i': 73,
        'r': 82
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
            case key.l:
                self.toggleNavigationBar();
                break;
            case key.t:
                self.newList();
                break;
            case key.i:
                self.toggleListInfo();
                break;
            case key.r:
                self.navigationBar.render();
                break;
        }
    });
};

HotKeys.prototype.render = function() {
    this.navigationBar.render();
    this.newListInput.render(this.navigationBar);
};


