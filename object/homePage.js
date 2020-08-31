const BasePage = require('../base')

class HomePage extends BasePage {
  get _emailInput() {
    return this.byCss('input')
  }
  get _requestInviteBtn() {
    return this.byCss('.btn-lg')
  }
  get _alertSuccess() {
    return this.byCss('.alert-success')
  }

}

module.exports = new HomePage()