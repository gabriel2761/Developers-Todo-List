var InputListName = function() {
    this.element = $('#input-listname');
    this.setFocusOutListener();
};

InputListName.prototype.make = function(result) {
    var self = this;
    var key = new KeyMap();
    self.show();
    self.element.off('keyup');
    self.element.keyup(function(event) {

        if (key.value(event.keyCode) !== 'enter') {
            result(null);
            return;
        }

        $(document).click();

        if (self.element.val() === '') {
            result(null);
            return;
        }

        result(self.element.val());
    });
};

InputListName.prototype.setFocusOutListener = function() {
    var self = this;
    this.element.focusout(function() {
        $(document).click();
        self.hide();
    });
};

InputListName.prototype.hide = function() {
    this.element.addClass('hidden');
};

InputListName.prototype.show = function() {
    this.element.removeClass('hidden');
    this.element.focus();
    this.clear();
};

InputListName.prototype.clear = function() {
    this.element.val('');
};