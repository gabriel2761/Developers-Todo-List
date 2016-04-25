var DataSync = function() {
    var database = new Database();
    this.data = database.getData();
};

Database.prototype.addData = function(data) {
    this.data.push(data);
};

DataSync.prototype.setData = function(data) {
    this.data = data;
};

DataSync.prototype.getData = function() {
    var database = new Database();
    return database.getData();
};

DataSync.prototype.syncLists = function(lists) {
    var data = [];
    lists.forEach(function(list) {
        data.push(list.getData());
    });
    this.setData(data);
    this.save();
};

DataSync.prototype.save = function() {
    var database = new Database();
    database.setData(this.data);
};