/**
 * Single key presses
 */
$(document).keyup(function(event) {
    var key = event.keyCode;

    console.log(key);

});


/**
 * Ctrl key presses
 */
$(document).keyup(function(event) {
    if (!event.ctrlKey) return;

});