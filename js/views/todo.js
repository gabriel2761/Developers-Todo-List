var Todo = function() {
    this.element = $('<section class="todo"></section>');
    this.listview = $('#listview');
};

Todo.prototype.make = function(result) {
    var key = new KeyMap();
    var input = $('<input class="todo-input">');

    this.element.append(input);
    this.listview.append(this.element);

    input.focus();
    input.keyup(function(event) {
        if (key.value(event.keyCode) !== 'enter') return;

        input.remove();
        $(document).click();
    });

    input.focusout(function() {
        $(document).click();
    });
};

Todo.prototype.render = function() {
    this.listview.append(this.element);
};