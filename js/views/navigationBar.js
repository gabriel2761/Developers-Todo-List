var NavigationBar = function() {
    this.element = $('#navigation-bar');
};

NavigationBar.prototype.toggleView = function() {
    this.element.toggleClass('hidden');
};

NavigationBar.prototype.render = function() {
    var self = this;
    self.element.empty();

    var database = new Database();
    database.getLists().forEach(function(list) {
        console.log(list.label);
        self.element.append(self.createTab(list.label));
    });
};

NavigationBar.prototype.createTab = function(label) {
    var tab = $('<div class="navigation-tab"><p>' + label + '</p></div>');
    return tab;
};