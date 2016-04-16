var key = {
    'l': 76,
    't': 84
};

/**
 * Single key presses
 */
$(document).keyup(function(event) {
    console.log(event.keyCode);

    switch (event.keyCode) {
        case key.l: toggleNavigationBar();
            break;
        case key.t: newList();
            break;
    }
});


/**
 * Ctrl key presses
 */
$(document).keyup(function(event) {
    if (!event.ctrlKey) return;

});

function newList() {

}

function toggleNavigationBar() {
     $('#navigation-bar').toggleClass('hidden');
}