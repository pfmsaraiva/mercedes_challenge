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
  beforeEach(() => {
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    
    // Visit Mercedes-Benz Shop Australia
    cy.visit("https://shop.mercedes-benz.com/en-au/shop/vehicle/srp/demo");
    // Accept cookies
    cy.get("class=cmm-cookie-banner__content").should('be.visible');

  })

  it('Validate the negative path of the highest price', () => {
  //Visit Mercedes-Benz Shop Australia
    cy.visit("https://shop.mercedes-benz.com/en-au/shop/vehicle/srp/demo");
  }) 
})
