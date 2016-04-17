var ListView = function(key, label) {
    this.key = key;
    this.label = label;
    this.listinfo = $('#listinfo');
    this.database = new Database();
};

ListView.prototype.toggleInfoView = function() {
    this.listinfo.toggleClass('hidden');
};

ListView.prototype.render = function() {
    this.listinfo.empty();
    this.listinfo.append(this.label);
};

ListView.prototype.remove = function() {
    this.database.removeList(this.key);
};