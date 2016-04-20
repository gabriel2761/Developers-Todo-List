var NavigationBar = function() {
    this.element = $('#navigation-bar');
    this.index = 0;
    this.database = new Database();
};

NavigationBar.prototype.toggleView = function() {
    this.element.toggleClass('hidden');
};

NavigationBar.prototype.getLists = function() {
    return this.database.getLists();
};

NavigationBar.prototype.render = function() {
    var self = this;
    self.element.empty();

    self.getLists().forEach(function(list) {
        self.element.append(self.createTab(list.label));
    });
};

NavigationBar.prototype.createTab = function(label) {
    return $('<div class="navigation-tab"><p>' + label + '</p></div>');
};

NavigationBar.prototype.renderList = function() {
    var data = this.getLists()[this.index];
    return new ListView(data.key, data.label, data.todos);
};

NavigationBar.prototype.moveLast = function() {
    this.index = (this.lists.length - 1);
};

NavigationBar.prototype.moveLeft = function() {
    if (this.index === 0) this.index = this.getLists().length;
    this.index--;
};

NavigationBar.prototype.moveRight = function() {
    if (this.index === this.getLists().length - 1) this.index = -1;
    this.index++;
};

