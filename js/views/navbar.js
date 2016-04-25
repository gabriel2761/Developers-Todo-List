var Navbar = function() {
    this.element = $('#navbar');
    this.tabs = [];
    this.index = 0;
    this.datasync = new DataSync();
};

Navbar.prototype.load = function() {
    var self = this;
    this.datasync.getData().forEach(function(data) {
        self.tabs.push(new Tab(data.listname));
    });
    if (this.hasTabs()) this.tabs[this.index].select();
};

Navbar.prototype.moveTabLeft = function() {
    if (!this.hasTabs()) return;
    if (this.index === 0) return;

    var temp = this.tabs[this.index - 1];
    this.tabs[this.index - 1] = this.tabs[this.index];
    this.tabs[this.index] = temp;

    this.index--;
    this.render();
};

Navbar.prototype.moveTabRight = function() {
    if (!this.hasTabs()) return;
    if (this.index === this.tabs.length - 1) return;

    var temp = this.tabs[this.index + 1];
    this.tabs[this.index + 1] = this.tabs[this.index];
    this.tabs[this.index] = temp;

    this.index++;
    this.render();
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

Navbar.prototype.deleteTab = function() {
    if (!this.hasTabs()) return;
    this.tabs[this.index].remove();
    this.tabs.splice(this.index, 1);
    if (!this.hasTabs()) return;

    if (this.index === 0) {
        this.tabs[this.index].select();
    } else if (this.index === this.tabs.length - 1) {
        this.tabs[this.index].select();
    } else {
        this.tabs[--this.index].select();
    }
};