HotKeys.prototype.toggleListInfo = function() {
    this.listview.toggleInfoView();
};

HotKeys.prototype.newList = function() {
    this.newListInput.create();
    this.listview = this.navigationBar.renderList();
    this.listview.render();
};

HotKeys.prototype.toggleNavigationBar = function() {
    this.navigationBar.toggleView();
};

HotKeys.prototype.navbarLeft = function() {
    this.navigationBar.moveLeft();
    this.listview = this.navigationBar.renderList();
    this.listview.render();
};

HotKeys.prototype.navbarRight = function() {
    this.navigationBar.moveRight();
    this.listview = this.navigationBar.renderList();
    this.listview.render();
};

HotKeys.prototype.removeList = function() {
    this.listview.remove();
    this.navigationBar.moveLeft();
    this.listview = this.navigationBar.renderList();
    this.listview.render();
    this.navigationBar.render();
};

HotKeys.prototype.showList = function() {

};
