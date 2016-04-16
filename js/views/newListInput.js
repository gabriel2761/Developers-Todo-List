var NewListInput = function() {
    this.input = $('<input id="newlist-input" class="hidden">');
    this.database = new Database();
};

NewListInput.prototype.create = function() {
    this.input.val('');
    this.input.toggleClass('hidden');
    this.input.focus();
};

NewListInput.prototype.render = function() {
    var self = this;
    self.input.keyup(function(event) {
        var value = self.input.val();
        if (event.keyCode !== 13 || value === '') return;

        self.database.createList(value);
        self.input.addClass('hidden');
    });

    self.input.focusout(function() {
        self.input.addClass('hidden');
    });

    $('#newlist-container').append(self.input);
};
