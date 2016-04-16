HotKeys.prototype.toggleListInfo = function() {
    $('#listinfo').toggleClass('hidden');
};

HotKeys.prototype.newList = function() {
    this.newListInput.create();
};

HotKeys.prototype.toggleNavigationBar = function() {
    this.navigationBar.toggleView();
};
