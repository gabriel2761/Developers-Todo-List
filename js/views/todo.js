var Todo = function() {
    this.element = $('<section class="todo"></section>');
    this.listview = $('#listview');
};

Todo.prototype.make = function(result) {
    var key = new KeyMap();
    var input = $('<input class="todo-input">');
    var heading = $('<h3 class="todo-heading"></h3>');
    var element = this.element;

    element.append(input);
    this.listview.prepend(this.element);

    input.focus();
    input.keyup(function(event) {
        if (key.value(event.keyCode) !== 'enter') {
            result(false);
            return;
        }

        input.remove();
        $(document).click();

        if (input.val() === '') {
            result(false);
            element.remove();
            return;
        }

        heading.append(input.val());
        element.append(heading);
        result(true);
    });

    input.focusout(function() {
        result(false);
        element.remove();
        $(document).click();
    });
};

Todo.prototype.remove = function() {
    this.element.remove();
};

Todo.prototype.render = function() {
    this.listview.prepend(this.element);
};