var Todo = function() {
    this.element = $('<section class="todo"></section>');
    this.listview = $('#listview');
    this.title = '';
};

Todo.prototype.create = function(data) {
    var heading = $('<h3 class="todo-heading"></h3>');
    this.title = data.title;
    heading.append(data.title);
    this.element.append(heading);
};

Todo.prototype.getData = function() {
    return { title: this.title };
};

Todo.prototype.edit = function(changed) {
    var self = this;
    var key = new KeyMap();
    var input = $('<textarea class="todo-input" placeholder="todo..." readonly>');
    var heading = $('<h3 class="todo-heading"></h3>');
    var element = this.element;

    element.empty();
    element.append(input);
    input.val(this.title);
    input.focus();
    input.prop('readonly', false);

    input.keydown(function(event) {
        if (key.value(event.keyCode) === 'esc') {
            $(document).click();
            return;
        }
        if (key.value(event.keyCode) !== 'enter') {
            changed(false);
            return;
        }
        var title = input.val();
        self.title = title;
        heading.append(title);
        element.append(heading);
        input.remove();
        $(document).click();
        changed(true);
    });

    input.focusout(function() {
        heading.append(self.title);
        element.append(heading);
        input.remove();
        $(document).click();
        changed(false);
    });
};

Todo.prototype.make = function(result) {
    var self = this;
    var key = new KeyMap();
    var input = $('<textarea class="todo-input" placeholder="todo..." readonly>');
    var heading = $('<h3 class="todo-heading"></h3>');
    var element = this.element;

    element.append(input);
    this.listview.prepend(this.element);

    input.focus();
    input.prop('readonly', false);
    input.keydown(function(event) {
        if (key.value(event.keyCode) === 'esc') {
            $(document).click();
            return;
        }
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

        var title = input.val();
        self.title = title;
        heading.append(title);
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