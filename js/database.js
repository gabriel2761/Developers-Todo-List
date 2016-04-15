var Database = function() {
    this.MASTER_KEY = 'mtjc57oytcgdjsymygb9e167enmv6sidbivc102j4i';
    var listviews = JSON.parse(localStorage.getItem(this.MASTER_KEY));
    if (listviews === null) localStorage.setItem(this.MASTER_KEY, JSON.stringify([]));

    // this.KEY = 'fsefi4g2gKUgav8yaVjahwqonzb';
    // var items = JSON.parse(localStorage.getItem(this.KEY));
    // if (items === null) localStorage.setItem(this.KEY, JSON.stringify([]));

    // this.ID_COUNT = 'sekj49uBjhabQkadkjsebn';
    // var id = localStorage.getItem(this.ID_COUNT);
    // if (id === null) localStorage.setItem(this.ID_COUNT, 0);
};

Database.prototype.newTab = function(label) {
    var listviews = JSON.parse(localStorage.getItem(this.MASTER_KEY));

    listviews.push({
        label: label,
        idCount: 0,
        item: []
    });

    localStorage.setItem(this.MASTER_KEY, JSON.stringify(listviews));
};

Database.prototype.getTabs = function() {
    return JSON.parse(localStorage.getItem(this.MASTER_KEY));
};


// Database.prototype.getUniqueId = function() {
//     var id = localStorage.getItem(this.ID_COUNT);
//     localStorage.setItem(this.ID_COUNT, ++id);
//     return id.toString();
// };

// Database.prototype.getItems = function() {
//     return JSON.parse(localStorage.getItem(this.KEY)).reverse();
// };

// Database.prototype.addItem = function(item) {
//     var items = JSON.parse(localStorage.getItem(this.KEY));
//     items.push({
//         id: this.getUniqueId(),
//         title: item.title
//     });
//     localStorage.setItem(this.KEY, JSON.stringify(items));
// };

// Database.prototype.removeItem = function(id) {
//     var items = JSON.parse(localStorage.getItem(this.KEY));
//     items.forEach(function(item) {
//         if (item.id === id) {
//             items.splice(items.indexOf(item), 1);
//         }
//     });
//     localStorage.setItem(this.KEY, JSON.stringify(items));
// };

// Database.prototype.insertItemBefore = function(draggedItemInfo, dropId) {
//     var items = JSON.parse(localStorage.getItem(this.KEY)),
//         dropPosition = 0,
//         initialPostition = 0;

//     for (var i = 0; i < items.length; i++) {
//         if (items[i].id === dropId) dropPosition = i;
//         if (items[i].id === draggedItemInfo.id) initialPostition = i;
//     }

//     if (initialPostition < dropPosition) {
//         items.splice(initialPostition, 1);
//         items.splice(dropPosition - 1, 0, draggedItemInfo);
//     } else if (initialPostition > dropPosition) {
//         items.splice(initialPostition, 1);
//         items.splice(dropPosition, 0, draggedItemInfo);
//     }


//     localStorage.setItem(this.KEY, JSON.stringify(items));
// };