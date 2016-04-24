var Todo = function() {
    this.element = $('<section class="todo"></section>');
    this.listview = $('#listview');
};

Todo.prototype.make = function(result) {
    var key = new KeyMap();
    var input = $('<input class="todo-input" placeholder="todo..." readonly>');
    var heading = $('<h3 class="todo-heading"></h3>');
    var element = this.element;

    element.append(input);
    this.listview.prepend(this.element);

    input.focus();
    input.prop('readonly', false);
    input.keydown(function(event) {
        if (key.value(event.keyCode) !== 'enter') {
            result(null);
            return;
        }

        input.remove();
        $(document).click();

        if (input.val() === '') {
            result('cancelled');
            element.remove();
            return;
        }

        heading.append(input.val());
        element.append(heading);
        result('created');
    });

    input.focusout(function() {
        result('cancelled');
        element.remove();
        $(document).click();
    });
};

Todo.prototype.select = function() {
    this.element.addClass('selected');
};

Todo.prototype.deselect = function() {
    this.element.removeClass('selected');
};

Todo.prototype.remove = function() {
    this.element.remove();
};

Todo.prototype.render = function() {
    this.listview.prepend(this.element);
};