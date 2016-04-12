function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    // TODO: Find a better way to get id,
    // without having to store data on the DOM
    console.log(event.srcElement.attributes.id.value);
}

var listView = new ListView();
listView.update();
