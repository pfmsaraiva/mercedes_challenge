/* 
Scenario: Validate the negative path of enquiring the highest price at Mercedes-Benz

The system under test is a Mercedes-Benz website where you can configure vehicles which can be found accessing this URL: 
Mercedes-Benz Shop Australia

No authentication is required once you access the mentioned URL.

Mandatory steps:

1- Open the Mercedes-Benz Shop used cars in Australian market.
2- On “Please select your location” fill:
  -Your State:  (e.g. 'New South Wales').
  -Postal Code:  (e.g. '2007').
  -Purpose: Private.
3- Click the filter button (top-left blue button)
4- Under the “Pre-Owned” tab, apply the following choices:
  -Colour: 
5- Navigate to the Vehicle Details of the most expensive car on the filtered results.
6- Save the following car details to a file:
  -VIN number
  -Model Year
7- In the side vehicle details click “Enquire Now”
8- Fill the “Contact Details and Account Creation” form with invalid data. (e.g. with an invalid email format)
9- Click "Proceed" and validate the error. 

*/


describe('Enquiring', () => {
  it('Validate the negative path of the highest price', () => {
  //Visit Mercedes-Benz Shop Australia
  cy.visit("https://www.google.com/");
  })
})

/* describe('Open Google Test', () => {
  it('Visit Mercedes-Benz Shop Australia', () => {
  //Visit Mercedes-Benz Shop Australia
  cy.visit("https://www.google.com/");
  // Reject Cookies
  cy.get('button[id="W0wltc"]').click();
  //Click Searchbox
  cy.get('textarea[name="q"]').click();
  //Write something
  cy.get('textarea[name="q"]').type('Something funny');
  //Search
  cy.get('input[name="btnK"]').eq(0).click();
  //Confirm that page has something on the results
})
}) */