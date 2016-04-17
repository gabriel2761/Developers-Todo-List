var NewListInput = function() {
    this.element = $('<input id="newlist-input" class="hidden">');
    this.database = new Database();
};

NewListInput.prototype.createList = function(callback) {
    var self = this;
    self.element.keyup(function(event) {
        var value = self.element.val();
        if (event.keyCode !== 13 || value === '') return;

        self.database.createList(value);
        self.element.addClass('hidden');

        callback(true);
    });

    self.element.focusout(function() {
        self.element.addClass('hidden');
    });

};

NewListInput.prototype.showInput = function() {
    this.element.val('');
    this.element.toggleClass('hidden');
    this.element.focus();
};

NewListInput.prototype.render = function() {
    var self = this;
    $('#newlist-container').append(self.element);
};
