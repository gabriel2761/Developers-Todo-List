document.onkeyup = function(event) {
    if (!event.ctrlKey) return;

    // ctrl + t
    if (event.keyCode === 84) {
        var database = new Database();
        database.newTab('this is a title');
    }
};

var NavigationTabs = function() {
    var database = new Database();
    this.tabs = database.getTabs();
};

NavigationTabs.prototype.render = function() {
    var navigationBar = document.getElementById('navigation-bar');
    this.tabs.forEach(function(tab) {
        console.log(tab.label);

        var element = document.createElement('div'),
            label = document.createTextNode(tab.label);

        element.setAttribute('class', 'list-heading');
        element.appendChild(label);
        navigationBar.appendChild(element);
    });
};