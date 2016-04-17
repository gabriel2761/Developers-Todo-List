HotKeys.prototype.toggleListInfo = function() {
    $('#listinfo').toggleClass('hidden');
};

HotKeys.prototype.newList = function() {
    this.newListInput.create();
};

HotKeys.prototype.toggleNavigationBar = function() {
    this.navigationBar.toggleView();
};

HotKeys.prototype.navbarLeft = function() {
    this.navigationBar.moveLeft();
};

HotKeys.prototype.navbarRight = function() {
    this.navigationBar.moveRight();
};
