/* eslint-disable no-undef */

function Page() {
}

Page.prototype = {
  open: path => browser.url(`/${path}`),
};

module.exports = new Page();
