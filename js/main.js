var input = $('#newlist-input');
input.keyup(function(event) {
    var value = input.val();
    if (event.keyCode !== 13 || value === '') return;

    var database = new Database();
    database.createList(value);
});