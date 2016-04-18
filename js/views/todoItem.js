var hotkey = hotkey || {};

var TodoItem = function() {
    var item = $('<section class="list-item"></section>');
    var input = $('<input class="item-input">');
    item.append(input);
    this.input = input;
    this.item = item;
};

TodoItem.prototype.make = function() {
    var self = this;
    self.input.focus();
    self.input.keyup(function(event) {
        var value = self.input.val();
        if (event.keyCode !== hotkey.ENTER) return;
        if (event.keyCode === hotkey.ENTER && value === '') {
            self.item.remove();
            return;
        }

        var heading = $('<h3 class="todo-heading">' + value + '</h3>');

        self.item.append(heading);
        self.input.remove();
    });

    self.input.focusout(function() {
        self.item.remove();
    });
};

TodoItem.prototype.render = function() {
    return this.item;
};