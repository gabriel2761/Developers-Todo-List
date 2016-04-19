var hotkey = hotkey || {};

var TodoItem = function() {
    this.database = new Database();
    this.item = $('<section class="list-item"></section>');
};

TodoItem.prototype.create = function(values) {
    var heading = $('<h3 class="todo-heading">' + values.title + '</h3>');
    this.item.append(heading);
    return this.item;
};

TodoItem.prototype.make = function(values) {
    var self = this;
    var input = $('<input class="item-input">');

    this.item.append(input);

    input.focus();
    input.keyup(function(event) {
        var title = input.val();
        if (event.keyCode !== hotkey.ENTER) return;
        if (event.keyCode === hotkey.ENTER && title === '') {
            self.item.remove();
            return;
        }

        var heading = $('<h3 class="todo-heading">' + title + '</h3>');

        input.remove();
        self.item.append(heading);

        values({
            title: title
        });
    });

    input.focusout(function() {
        self.item.remove();
    });
};

TodoItem.prototype.render = function() {
    return this.item;
};