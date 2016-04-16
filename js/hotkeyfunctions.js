function toggleListInfo() {
    $('#listinfo').toggleClass('hidden');
}

function newList() {
    var input = new NewTabInput();
    $('body').append(input);

    input.keyup(function(event) {
        if (event.keyCode !== 13 || value === '') return;

        var value = input.val();
        var database = new Database();
        database.createList(value);

        this.remove();
    });
}

function toggleNavigationBar() {
     $('#navigation-bar').toggleClass('hidden');
}
