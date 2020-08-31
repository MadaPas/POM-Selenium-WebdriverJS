const webdriver = require('selenium-webdriver'),
      chrome = require('selenium-webdriver/chrome'),
      By = webdriver.By,
      until = webdriver.until,
      o = new chrome.Options()
      o.addArguments('disable-infobars')
    //  o.addArguments('headless')
const fake = require('./util/fake_data')

class BasePage {
  constructor() {
    this.fake = fake
  }

  async createDriver(){
    global.driver = new webdriver.Builder().setChromeOptions(o).forBrowser('chrome').build()
  }

  async visit(theUrl) {
    return await driver.get(theUrl)
  }

  async quit() {
    return await driver.quit()
  }

  async byCss(element) {
    return await driver.wait(until.elementLocated(By.css(element)), 15000)
  }

  async byXpath(element) {
    return await driver.wait(until.elementLocated(By.xpath(element)), 15000)
  }

  async byLinkText(text) {
    return await driver.wait(until.ementLocated(By.linkText(text)), 15000)
  }

  async byCssAll(element) {
    return await driver.wait(until.elementsLocated(By.css(element)), 15000);
  }

  async write(element, txt) {
    //Note: using return in the methods lets you chain them
    const input = await this.byCss(element)
    return await input.sendKeys(txt)
  }

}

module.exports = BasePage