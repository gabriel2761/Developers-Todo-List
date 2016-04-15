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

    var checkbox = document.createElement('div');

    var trash = document.createElement('p'),
        remove = document.createTextNode('X');

    item.ondragstart = function(event) {

        var draggedItemInfo = {
            id: this.id,
            title: this.title
        };

        event.dataTransfer.setData('itemInfo',
                JSON.stringify(draggedItemInfo));
    };

    item.appendChild(new DropArea(this.id));

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

var DropArea = function(id) {
    this.droparea = document.createElement('div');

    this.droparea.ondragover = function(event) {
        event.preventDefault();
    };

    this.droparea.ondrop = function(event) {
        var database = new Database(),
            draggedItemInfo =
                    JSON.parse(event.dataTransfer.getData('itemInfo'));

        database.insertItemBefore(draggedItemInfo, id);
        listView.update();
    };

    this.droparea.setAttribute('class', 'droparea');

    return this.droparea;
};
