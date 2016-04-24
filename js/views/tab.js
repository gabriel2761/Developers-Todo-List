var Tab = function(listname) {
    this.element = $('<div class="navbar-tab"><p>'+listname+'</p></div>');
    this.navbar = $('#navbar');
};

Tab.prototype.render = function() {
    this.navbar.append(this.element);
};

Tab.prototype.select = function() {
    this.element.addClass('selected');
};

Tab.prototype.deselect = function() {
    this.element.removeClass('selected');
};