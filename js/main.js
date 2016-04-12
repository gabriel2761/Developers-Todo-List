function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    alert('Item dropped');
}

var listView = new ListView();
listView.update();
