var InputListName = function() {
    this.element = $('#input-newlist');
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

