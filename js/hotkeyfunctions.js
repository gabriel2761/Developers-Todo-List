HotKeys.prototype.toggleListInfo = function() {
    this.listview.toggleInfoView();
};

HotKeys.prototype.newList = function() {
    this.newListInput.showInput();
};

HotKeys.prototype.toggleNavigationBar = function() {
    this.navigationBar.toggleView();
};

HotKeys.prototype.navbarLeft = function() {
    this.navigationBar.moveLeft();
    this.listview = this.navigationBar.renderList();
    this.listview.clear();
    this.listview.render();
};

HotKeys.prototype.navbarRight = function() {
    this.navigationBar.moveRight();
    this.listview = this.navigationBar.renderList();
    this.listview.clear();
    this.listview.render();
};

HotKeys.prototype.removeList = function() {
    this.listview.remove();
    this.navigationBar.moveLeft();
    this.listview = this.navigationBar.renderList();
    this.listview.render();
    this.navigationBar.render();
};

HotKeys.prototype.createTodoItem = function() {
    this.listview.createTodoItem();
};

HotKeys.prototype.showList = function() {

};
