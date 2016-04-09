var Database = function() {
    this.KEY = 'fsefi4g2gKUgav8yaVjahwqonzb';
    var items = JSON.parse(localStorage.getItem(this.KEY));
    if (items === null) localStorage.setItem(this.KEY, JSON.stringify([]));

    this.ID_COUNT = 'sekj49uBjhabQkadkjsebn';
    var id = localStorage.getItem(this.ID_COUNT);
    if (id === null) localStorage.setItem(this.ID_COUNT, 0);
};

Database.prototype.getUniqueId = function() {
    var id = localStorage.getItem(this.ID_COUNT);
    localStorage.setItem(this.ID_COUNT, ++id);
    return id;
};

Database.prototype.getItems = function() {
    return JSON.parse(localStorage.getItem(this.KEY)).reverse();
};

Database.prototype.addItem = function(item) {
    var items = JSON.parse(localStorage.getItem(this.KEY));
    items.push({
        id: this.getUniqueId(),
        title: item.title
    });
    localStorage.setItem(this.KEY, JSON.stringify(items));
};