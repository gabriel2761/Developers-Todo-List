var InputListName = function() {
    this.element = $('#input-newlist');
};

InputListName.prototype.checkVisible = function(key, visible) {
    if (!this.isHidden()) {
        if (key === 'enter') {
            this.clear();
            this.hide();
        }
        visible(true);
    }

    if (key === 't' && this.isHidden()) {
        this.show();
        this.focus();
        visible(true);
    }

    visible(false);
};

InputListName.prototype.isHidden = function() {
    return this.element.hasClass('hidden');
};

InputListName.prototype.hide = function() {
    this.element.addClass('hidden');
};

InputListName.prototype.show = function() {
    this.element.removeClass('hidden');
};

InputListName.prototype.focus = function() {
    this.element.focus();
};

InputListName.prototype.clear = function() {
    this.element.val('');
};