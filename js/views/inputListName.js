var InputListName = function() {
    this.element = $('#input-listname');
};

InputListName.prototype.checkVisible = function(key, result) {
    if (!this.isHidden()) {
        if (key === 'enter') {
            this.hide();
            result({
                'visible': false,
                'value': this.element.val()
            });
            return;
        }
    }

    if (key === 't' && this.isHidden()) {
        this.clear();
        this.show();
        this.focus();
        result({
            'visible': true
        });
        return;
    }

    result({
        'visible': false
    });
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