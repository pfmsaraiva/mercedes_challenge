describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe('Open Google Test', function() {
  it('Visits Google homepage', function() {
  //Visit the Demo QA Website
  cy.visit("https://www.google.com/");
})
})