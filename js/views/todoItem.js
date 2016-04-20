var hotkey = hotkey || {};

var TodoItem = function() {
    this.database = new Database();
    this.item = $('<section class="list-item"></section>');
};

TodoItem.prototype.removeFocus = function() {
    this.item.removeClass('selected');
};

TodoItem.prototype.focus = function() {
    this.item.addClass('selected');
};

TodoItem.prototype.create = function(values) {
    var heading = $('<h3 class="todo-heading">' + values.title + '</h3>');
    this.item.append(heading);
};

TodoItem.prototype.make = function(values) {
    var self = this;
    var input = $('<input class="item-input">');

    this.item.append(input);

    input.focus();
    input.keydown(function(event) {
        var title = input.val();
        if (event.keyCode !== hotkey.ENTER) return;
        if (event.keyCode === hotkey.ENTER && title === '') return;

        var heading = $('<h3 class="todo-heading">' + title + '</h3>');

        input.remove();
        self.item.append(heading);

        values({
            title: title
        });
    });
};

TodoItem.prototype.remove = function() {
    this.item.remove();
};

TodoItem.prototype.render = function() {
    $('#listview').prepend(this.item);
};