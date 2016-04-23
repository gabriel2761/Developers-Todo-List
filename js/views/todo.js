var Todo = function() {
    this.element = $('<section class="todo"></section>');
    this.listview = $('#listview');
};

Todo.prototype.make = function() {
    var input = $('<input class="todo-input">');
    this.element.append(input);
    this.listview.append(this.element);
    input.focus();
    input.keyup(function(event) {

    });
};

Todo.prototype.render = function() {
    this.listview.append(this.element);
};