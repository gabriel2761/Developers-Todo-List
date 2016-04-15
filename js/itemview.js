var Item = function(data, listview) {
    this.id = data.id;
    this.title = data.title;
    this.listview = listview;
};

Item.prototype.render = function() {
    var self = this;

    var item = document.createElement('section'),
        heading = document.createElement('h3'),
        title = document.createTextNode(this.title);

    var droparea = document.createElement('div');
    var checkbox = document.createElement('div');

    var trash = document.createElement('p'),
        remove = document.createTextNode('X');


    droparea.ondragover = function(event) {
        event.preventDefault();
    };

    droparea.ondrop = function(event) {
        var database = new Database(),
            dropId = self.id,
            draggedItemInfo =
                    JSON.parse(event.dataTransfer.getData('itemInfo'));

        database.insertItemBefore(draggedItemInfo, dropId);
        listView.update();
    };

    item.ondragstart = function(event) {

        var draggedItemInfo = {
            id: this.id,
            title: this.title
        };

        event.dataTransfer.setData('itemInfo',
                JSON.stringify(draggedItemInfo));
    };

    // TODO: Add a drop area for the first position

    droparea.setAttribute('class', 'droparea');
    droparea.id = self.id;

    item.appendChild(droparea);

    checkbox.setAttribute('class', 'checkbox');
    item.appendChild(checkbox);

    item.setAttribute('class', 'list-item');

    item.id = self.id;
    item.title = self.title;

    item.setAttribute('draggable', 'true');
    heading.appendChild(title);
    heading.setAttribute('class', 'title');
    item.appendChild(heading);

    trash.setAttribute('class', 'trash');
    trash.appendChild(remove);
    item.appendChild(trash);

    trash.addEventListener('click', function() {
        var database = new Database();
        database.removeItem(self.id);
        self.listview.update();
    });

    return item;
};