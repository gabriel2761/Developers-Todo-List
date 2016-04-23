var Navbar = function() {
    this.element = $('#navbar');
    this.listItems = [];
};

Navbar.prototype.addTab = function(name) {
   this.listItems.push(name);
};

Navbar.prototype.render = function() {
    var self = this;
    self.element.empty();
    self.listItems.forEach(function(name) {
        var tab = $('<div class="navbar-tab"><p>'+name+'</p></div>');
        self.element.append(tab);
    });
};