var InputListName = function() {
    this.element = $('#input-listname');
    this.setFocusOutListener();
};

InputListName.prototype.make = function(listname) {
    var self = this;
    var key = new KeyMap();
    self.show();
    self.element.prop('readonly', false);
    self.element.off('keydown');
    self.element.keydown(function(event) {

        if (key.value(event.keyCode) !== 'enter') {
            listname(null);
            return;
        }

        $(document).click();

        if (self.element.val() === '') {
            listname(null);
            return;
        }

        self.element.prop('readonly', true);
        listname(self.element.val());
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