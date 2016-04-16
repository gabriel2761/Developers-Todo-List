var key = {
    'l': 76,
    't': 84,
    'i': 73
};

/**
 * Single key presses
 */
$(document).keyup(function(event) {
    console.log(event.keyCode);
});


/**
 * Ctrl key presses
 */
$(document).keyup(function(event) {
    if (!event.ctrlKey) return;
    switch (event.keyCode) {
        case key.l: toggleNavigationBar();
            break;
        case key.t: newList();
            break;
        case key.i: toggleListInfo();
            break;
    }
});

function toggleListInfo() {
    $('#listinfo').toggleClass('hidden');
}

function newList() {

}

function toggleNavigationBar() {
     $('#navigation-bar').toggleClass('hidden');
}