const Libraries = require('../scenario/library')
const NavBar = require('../scenario/navbar')
let librariesScenarios

describe('Library app scenarios: Library listings', () => {
  jest.setTimeout(50000)

  beforeEach(async () => {
    //Note: instantiating new instance in beforeEach guarantees your class is stateless and prevents any memory leaks
    librariesScenarios = new Libraries()
    const navBarScenarios = new NavBar()
    librariesScenarios.createDriver()
    await librariesScenarios.visit('https://library-app.firebaseapp.com')
    await navBarScenarios.goToLibrariesPage()
  })

  afterEach(async () => {
    await librariesScenarios.quit()
  }
)

  it('Should list libraries', async () => {
    const libraries = await librariesScenarios.listLibraries()
    expect(libraries.length).toBeGreaterThan(5);
  })

  it('Should be able to add a new library', async () => {
    const addLibrary = await librariesScenarios.addLibrary()
    expect(addLibrary.libraryList).toMatch(addLibrary.libraryName)
  })

  it('Should be able to filter libraries', async () => {
    const libraries = await librariesScenarios.filterLibraries()
    expect(libraries.libraryList).toMatch(libraries.newLibrary)
  })

})