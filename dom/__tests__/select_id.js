jest
  .unmock('../exercises')

describe('selectId', () => {
  it('works', () => {
    // Set up our document body
    document.body.innerHTML = `
      <div class="foo" ref="cl1">
        <span id="42" ref="1.1"></span>
      </div>
    `

    const selectId = require('../exercises').selectId

    expect(selectId(document, '42')[0].getAttribute('ref'), '1.1')
  })
})
