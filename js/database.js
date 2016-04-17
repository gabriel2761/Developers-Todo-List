var Database = function() {
    this.KEY = '5fwm1vxhluazfb93r93aw0zfr7ggses2vztfgjsse0sm9tz9f6r';
    var lists = JSON.parse(localStorage.getItem(this.KEY));
    if (!lists) localStorage.setItem(this.KEY, JSON.stringify([]));
};

Database.prototype.getLists = function() {
    return JSON.parse(localStorage.getItem(this.KEY));
};

Database.prototype.createList = function(label) {
    var lists = JSON.parse(localStorage.getItem(this.KEY));
    lists.push({
        key: Math.random().toString(36).substring(2),
        label: label
    });
    localStorage.setItem(this.KEY, JSON.stringify(lists));
};