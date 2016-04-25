var Database = function() {
    this.key = 'kvwcq7fv98kmwbq2srgvz33di';
    this.data = JSON.parse(localStorage.getItem(this.key));
    if (this.data === null) {
        this.data = localStorage.setItem(this.key, JSON.stringify([]));
    }
};

Database.prototype.getData = function() {
    return this.data;
};

Database.prototype.setData = function(data) {
    localStorage.setItem(this.key, JSON.stringify(data));
};