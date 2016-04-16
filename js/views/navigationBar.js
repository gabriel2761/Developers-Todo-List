var NavigationBar = function() {
    this.element = $('#navigation-bar');
};

NavigationBar.prototype.toggleView = function() {
    this.element.toggleClass('hidden');
};

NavigationBar.prototype.render = function() {};