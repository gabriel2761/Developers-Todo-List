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
        label: label,
        todos: []
    });
    localStorage.setItem(this.KEY, JSON.stringify(lists));
};

Database.prototype.removeList = function(key) {
    var lists = JSON.parse(localStorage.getItem(this.KEY));
    lists.forEach(function(list) {
        if (list.key === key) lists.splice(lists.indexOf(list), 1);
    });
    localStorage.setItem(this.KEY, JSON.stringify(lists));
};

Database.prototype.getListItems = function(key) {
    var lists = JSON.parse(localStorage.getItem(this.KEY));
    var todos = null;
    lists.forEach(function(list) {
        if (list.key === key) todos = list.todos;
    });
    return todos;
};

Database.prototype.addTodo = function(key, values) {
    var lists = JSON.parse(localStorage.getItem(this.KEY));
    lists.forEach(function(list) {
        if (list.key === key) {
            list.todos.push(values);
        }
    });
    localStorage.setItem(this.KEY, JSON.stringify(lists));
};