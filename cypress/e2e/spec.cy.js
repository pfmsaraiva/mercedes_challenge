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
    cy.get('[data-test="handle-accept-all-button"]', { timeout: 50000 } ).first().click();
  })

  it('Validate the negative path of the highest price', () => {
  //Validate that the location form appears
  
  //Validate that the Continue button is disabled before the info is inserted
  
  //Validate that the list of states has all of them

  //Add and validate that the State appears (e.g. 'New South Wales')
  
  
  //Add and validate that the Postal Code appears (e.g. '2007')
  
  //Set the Purpose to Private and validate that is selected

  //Validate that the Continue button is enabled after the info is inserted
  
  //Press Continue to submit the information

  //Validate that the State inserted appears on the site location on top

  //Press the Filter button

  //Filter by pre-owned

  //Filter by color 
  //Brilliant Blue Metallic was the first color that had mor than one vehicle available

  //Validate that the number of results matches the number of actual results

  //Navigate and enter the Vehicle details of the most expensive car on the filtered list
  //Here will be checked the most expensive car, other way was to filter from the highest to lowest price

  //Validate that the price clicked is presented on the Vehicle page

  //Save some vehicle details to a file (VIN number, Model Year)

  //Click Enquire Now

  //Fill the “Contact Details and Account Creation” form with invalid data. 

  //Validate that the error messages appears on email, phone number and post code

  //Click Proceed 
  
  //Validate the error message


  //Visit Mercedes-Benz Shop Australia
    cy.visit("https://shop.mercedes-benz.com/en-au/shop/vehicle/srp/demo");
  }) 
})
