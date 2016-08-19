var page = require('./page')

var searchPage = Object.create(page, {
    /**
     * define elements
     */
    searchBtn: { get: function () { return browser.element('button[type="submit"]'); } },
    searchField: { get: function () { return browser.element('input[name="q"]'); } },
    searchResults: { get: function () { return browser.element('#search'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, '');
    } },

    searchFor: { value: function(value) {
        this.searchField.setValue(value);
        this.searchBtn.click();
        this.searchResults.waitForVisible();
    } }
});

module.exports = searchPage;