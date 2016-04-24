var ListView = function() {
    this.element = $('#listview');
    this.lists = [];
    this.index = 0;
};

ListView.prototype.makeList = function(listname) {
    this.lists.push(new List(listname));
};

ListView.prototype.makeTodo = function() {
    if (this.lists.length < 1) {
        // TODO: Change to a snackbar
        alert('need to create a list first');
        return;
    }
    this.lists[0].makeTodo();
};

ListView.prototype.next = function() {

};

ListView.prototype.prev = function() {

};