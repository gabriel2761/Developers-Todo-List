document.onkeyup = function(event) {
    if (!event.ctrlKey) return;

    if (event.keyCode === 84) alert('new tab');
};