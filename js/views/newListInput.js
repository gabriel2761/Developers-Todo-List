var NewListInput = function() {
    this.element = $('<input id="newlist-input" class="hidden">');
    this.database = new Database();
};

NewListInput.prototype.create = function() {
    this.element.val('');
    this.element.toggleClass('hidden');
    this.element.focus();
};

NewListInput.prototype.render = function(navigationBar) {
    var self = this;
    self.element.keyup(function(event) {
        var value = self.element.val();
        if (event.keyCode !== 13 || value === '') return;

        self.database.createList(value);
        self.element.addClass('hidden');

        navigationBar.render();
    });

    self.element.focusout(function() {
        self.element.addClass('hidden');
    });

    $('#newlist-container').append(self.element);
};
