var Todo = function() {
    this.element = $('<section class="todo"></section>');
};

Todo.prototype.make = function() {

};

Todo.prototype.render = function() {
    $('#listview').append(this.element);
};