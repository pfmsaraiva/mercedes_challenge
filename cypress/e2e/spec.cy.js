describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe('Open Google Test', () => {
  it('Visits Google homepage', () => {
  //Visit the Demo QA Website
  cy.visit("https://www.google.com/");
  // Reject Cookies
  cy.get('button[id="W0wltc"]').click();
  //Click Searchbox
  cy.get('textarea[name="q"]').click();
  //Write something
  cy.get('textarea[name="q"]').type('Something funny');
  //Search
  //cy.get('input[type="Submit"]').click();
  //Confirm that page has something on the results
})
})