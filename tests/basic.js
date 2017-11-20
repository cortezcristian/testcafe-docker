import { Selector } from 'testcafe'

fixture `Getting Started`
  .page `http://devexpress.github.io/testcafe/example`
  .beforeEach( async t => {
    await t.maximizeWindow()
})

test('My first test', async t => {
  await t
    .typeText('#developer-name', 'John Smith')
    .takeScreenshot('test.png')
    .click('#submit-button')
})
