var NavigationBar = function() {
    this.element = $('#navigation-bar');
    this.lists = [];
    this.index = 0;
    this.database = new Database();
};

NavigationBar.prototype.toggleView = function() {
    this.element.toggleClass('hidden');
};

NavigationBar.prototype.render = function() {
    var self = this;
    self.element.empty();
    self.lists = self.database.getLists();

    self.lists.forEach(function(list) {
        self.element.append(self.createTab(list.label));
    });
};

NavigationBar.prototype.createTab = function(label) {
    var tab = $('<div class="navigation-tab"><p>' + label + '</p></div>');
    return tab;
};

NavigationBar.prototype.renderList = function() {
    var data = this.lists[this.index];
    return new ListView(data.key, data.label);
};

NavigationBar.prototype.moveLeft = function() {
    if (this.index === 0) this.index = this.lists.length;
    this.index--;
};

NavigationBar.prototype.moveRight = function() {
    if (this.index === this.lists.length - 1) this.index = -1;
    this.index++;
};

