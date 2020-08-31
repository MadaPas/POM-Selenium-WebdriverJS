
const BasePage = require('../base')
const HomePage = require('../object/homePage')

class HomeScenarios extends BasePage {
  async requestBtn(){
    const emailInput = await HomePage._emailInput
    await emailInput.sendKeys(this.fake().email)
    const btnLg = await HomePage._requestInviteBtn
    return await {
      opacity: await btnLg.getCssValue('opacity'),
      state: await btnLg.isEnabled()
    }
  }

  async clickSubmit(){
    const btnLg = await HomePage._requestInviteBtn
    return await btnLg.click()
  }

  async alertSuccess(){
    await this.requestBtn()
    await this.clickSubmit()
    const alertSuccessMsg = await HomePage._alertSuccess
    return await alertSuccessMsg.getText()
  }

}


module.exports = HomeScenarios