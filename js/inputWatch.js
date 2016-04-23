var InputWatch = function() {
    this.status = false;
    this.value = '';
};

InputWatch.prototype.clearValue = function() {
    this.value = '';
};

InputWatch.prototype.addValue = function(value) {
    this.value += value;
};

InputWatch.prototype.getStatus = function() {
    return this.status;
};

InputWatch.prototype.setStatusTrue = function() {
    this.status = true;
};

InputWatch.prototype.setStatusFalse = function() {
    this.status = false;
};