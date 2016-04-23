App.prototype.checkListNameInput = function(key) {
    var result = false;
    var self = this;
    self.inputListName.checkVisible(key, function(result) {
        if (result.visible) {
            inputVisible = true;
            result = true;
        }
        if (result.value !== undefined && result.value !== '') {
            self.navbar.addTab(result.value);
            self.navbar.render();
        }
    });
    return result;
};