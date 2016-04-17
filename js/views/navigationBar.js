var NavigationBar = function() {
    this.element = $('#navigation-bar');
    this.tabs = [];
    this.database = new Database();
};

NavigationBar.prototype.toggleView = function() {
    this.element.toggleClass('hidden');
};

NavigationBar.prototype.render = function() {
    var self = this;
    self.element.empty();

    self.database.getLists().forEach(function(list) {
        self.element.append(self.createTab(list.label));
    });
};

NavigationBar.prototype.createTab = function(label) {
    var tab = $('<div class="navigation-tab"><p>' + label + '</p></div>');
    return tab;
};