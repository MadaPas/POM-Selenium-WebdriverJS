const BasePage = require('../base')
const LibrariesPage = require('../object/library')

class LibrariesScenarios extends BasePage {
  async listLibraries(){
    return await LibrariesPage._libraryItem
  }

  async addLibrary(fakeLibraryName = this.fake().libraryName){
    const fakeLibraryAddress = this.fake().address
    const fakeLibraryPhone = this.fake().phone
    const addNewLibrary = await LibrariesPage._addNewLibrary
    await addNewLibrary.click()
    const [libraryName, libraryAddress, libraryPhone] = await LibrariesPage._formInputs
    await libraryName.sendKeys(fakeLibraryName)
    await libraryAddress.sendKeys(fakeLibraryAddress)
    await libraryPhone.sendKeys(fakeLibraryPhone)
    const createLibraryBtn = await LibrariesPage._createLibraryBtn
    await createLibraryBtn.click()
    const libraryList = await LibrariesPage._libraryContainer
    const libraryListText = await libraryList.getText()
    return {
      libraryList: libraryListText,
      libraryName: fakeLibraryName
    }
  }

  async filterLibraries(){
    const newLibrary = this.fake().libraryName
    await this.addLibrary(newLibrary)
    const inputFilter = await LibrariesPage._inputFilter
    await inputFilter.sendKeys(newLibrary)
    const libraryList = await LibrariesPage._libraryContainer
    const libraryListText = await libraryList.getText()
    return {
      libraryList: libraryListText,
      newLibrary: newLibrary
    }
  }

}


module.exports = LibrariesScenarios