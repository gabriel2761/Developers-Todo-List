var keys = {
    'l': 76
};

/**
 * Single key presses
 */
$(document).keyup(function(event) {
    console.log(event.keyCode);

    switch (event.keyCode) {
        case keys.l: toggleNavigationBar();
            break;
    }
});


/**
 * Ctrl key presses
 */
$(document).keyup(function(event) {
    if (!event.ctrlKey) return;

});

function toggleNavigationBar() {
     $('#navigation-bar').toggleClass('hidden');
}