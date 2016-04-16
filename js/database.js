var Database = function() {
    this.KEY = '5fwm1vxhluazfb93r93aw0zfr7ggses2vztfgjsse0sm9tz9f6r';
    var lists = JSON.parse(localStorage.getItem(this.KEY));
    if (!lists) localStorage.setItem(this.KEY, JSON.stringify([]));
    this.lists = JSON.parse(localStorage.getItem(this.KEY));
};

Database.prototype.createList = function(title) {
    this.lists.push({
        key: Math.random().toString(36).substring(2),
        title: title
    });
    this.setList();
};

Database.prototype.setList = function() {
    localStorage.setItem(this.KEY, JSON.stringify(this.list));
};