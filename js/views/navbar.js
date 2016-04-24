var Navbar = function() {
    this.element = $('#navbar');
    this.tabs = [];
    this.index = 0;
};

Navbar.prototype.deselectCurrentTab = function() {
    this.tabs[this.index].deselect();
};

Navbar.prototype.addTab = function(listname) {
    if (this.hasTabs()) this.deselectCurrentTab();
    var tab = new Tab(listname);
    this.tabs.push(tab);
    this.index = this.tabs.length - 1;
    tab.select();
};

Navbar.prototype.render = function() {
    this.element.empty();
    this.tabs.forEach(function(tab) {
        tab.render();
    });
};

Navbar.prototype.hasTabs = function() {
    if (this.tabs.length > 0) return true;
    return false;
};

Navbar.prototype.nextTab = function() {
    if (!this.hasTabs()) return;
    this.deselectCurrentTab();
    if (this.index === this.tabs.length - 1) {
        this.index = -1;
    }
    this.tabs[++this.index].select();
};

Navbar.prototype.prevTab = function() {
    if (!this.hasTabs()) return;
    this.deselectCurrentTab();
    if (this.index === 0) {
        this.index = this.tabs.length;
    }
    this.tabs[--this.index].select();
};