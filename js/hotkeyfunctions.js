function toggleListInfo() {
    $('#listinfo').toggleClass('hidden');
}

function newList() {
    var input = $('#newlist-input');
    input.val('');
    input.toggleClass('hidden');
    input.focus();
}

function toggleNavigationBar() {
     $('#navigation-bar').toggleClass('hidden');
}
