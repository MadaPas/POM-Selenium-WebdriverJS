const Home = require('../scenario/homePage')
let homeScenarios

describe('Library app scenarios: Home Page', () => {
  jest.setTimeout(50000)

  beforeEach(async () => {
    //Note: instantiating new instance in beforeEach guarantees your class is stateless and prevents any memory leaks
    homeScenarios = new Home()
    homeScenarios.createDriver()
    await homeScenarios.visit('https://library-app.firebaseapp.com')
  })

  afterEach(async () => {
    await homeScenarios.quit()
  })

  it('Typing valid email changes button opacity to 1', async () => {
    const btn = await homeScenarios.requestBtn()
    expect(btn.opacity).toBe("1")
  })

  it('Typing a valid email enables request button', async () => {
    const btn = await homeScenarios.requestBtn()
    expect(btn.state).toBe(true)
  })

  it('Clicking request invitation triggers a confirmation alert', async () => {
    const alert = await homeScenarios.alertSuccess()
    expect(alert).toMatch('Thank you')
  })

})