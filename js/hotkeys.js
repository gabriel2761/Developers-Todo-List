var key = {
    'l': 76,
    't': 84,
    'i': 73
};

/**
 * Single key presses
 */
$(document).keyup(function(event) {

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
