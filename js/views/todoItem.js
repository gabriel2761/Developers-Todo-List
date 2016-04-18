var hotkey = hotkey || {};

var TodoItem = function() {
    this.database = new Database();
    var item = $('<section class="list-item"></section>');
    var input = $('<input class="item-input">');
    item.append(input);
    this.input = input;
    this.item = item;
};

TodoItem.prototype.create = function(values) {
    var heading = $('<h3 class="todo-heading">' + values.title + '</h3>');
    this.item.append(heading);
    return this.item;
};

TodoItem.prototype.make = function(values) {
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

        values({
            title: value
        });
    });

    self.input.focusout(function() {
        self.item.remove();
    });
};

TodoItem.prototype.render = function() {
    return this.item;
};