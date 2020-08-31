const BasePage = require('../base')

class NavBar extends BasePage {
  get _librariesLink() {
    return this.byXpath('//a[contains(text(), "Libraries")]')
  }

}

module.exports = new NavBar()