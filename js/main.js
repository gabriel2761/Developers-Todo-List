function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    // TODO: Find a better way to get id,
    // without having to store data on the DOM
    var database = new Database(),
        dropId = event.srcElement.attributes.id.value,
        draggedItemInfo = JSON.parse(event.dataTransfer.getData('itemInfo'));

    database.insertItemBefore(draggedItemInfo, dropId);
    listView.update();
}

function drag(event) {
    var id = event.srcElement.attributes.id.value,
        title = event.srcElement.children[2].innerHTML;

    var draggedItemInfo = {
        id: id,
        title: title
    };

    event.dataTransfer.setData('itemInfo', JSON.stringify(draggedItemInfo));
}

var listView = new ListView();
listView.update();