const BasePage = require('../base')
const NavBarPage = require('../object/navbar')

class NavBarScenarios extends BasePage {
  async goToLibrariesPage(){
    const librariesLink = await NavBarPage._librariesLink
    await librariesLink.click()
  }

}

module.exports = NavBarScenarios