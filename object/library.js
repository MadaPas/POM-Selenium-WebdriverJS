const BasePage = require('../base')

class LibrariesPage extends BasePage {
  get _libraryItem() {
    return this.byCssAll('.library-item')
  }
  get _formInputs() {
    return this.byCssAll('.form-control')
  }
  get _createLibraryBtn() {
    return this.byCss('.btn-default')
  }
  get _libraryContainer() {
    return this.byCss('body.ember-application:nth-child(2) div.ember-view:nth-child(5) div.container > div.row:nth-child(6)')
  }
  get _inputFilter() {
    return this.byCss('input[placeholder="Filter by library name"]')
  }
  get _addNewLibrary() {
    return this.byLinkText('Add new')
  }

}


module.exports = new LibrariesPage()