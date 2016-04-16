HotKeys.prototype.toggleListInfo = function() {
    $('#listinfo').toggleClass('hidden');
};

HotKeys.prototype.newList = function() {
    this.newListInput.create();
};

HotKeys.prototype.toggleNavigationBar = function() {
    $('#navigation-bar').toggleClass('hidden');
};
