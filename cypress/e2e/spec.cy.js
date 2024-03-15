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
    cy.get('[data-test="handle-accept-all-button"]', { timeout: 120000 } ).first().click();
  })

  it('Validate the negative path of the highest price', () => {
  //Validate that the location form appears
    cy.get('[data-test-id="modal-popup__location"]').should('exist');
  
  //Validate that the Continue button is disabled before the info is inserted
    cy.get('[data-test-id="state-selected-modal__close"]').should('be.disabled');
  
  //Validate that the list of states has all of them
  //tofix
  //cy.get('select').find('option').should('have.length', 9);
  
  //Add and validate that the State appears (e.g. 'New South Wales')
    cy.get('select').first().select("New South Wales").invoke("val").should("eq", "New South Wales");
    cy.get("select option:selected").contains( "New South Wales");
  
  //Add and validate that the Postal Code appears (e.g. '2007')
    cy.get('[aria-labelledby="postal-code-hint"]').type('2007');
  //tofix
  //cy.get('[aria-labelledby="postal-code-hint"]').contains('2007');
    
  //Set the Purpose to Private and validate that is selected
    cy.get('[value="P"]').check({ force: true});
  
  //Validate that the Continue button is enabled after the info is inserted
    cy.get('[value="P"]').check({ force: true}).should('be.checked');
  
  //Press Continue to submit the information
    cy.get('[data-test-id="state-selected-modal__close"]').click();
  
  //Validate that the State inserted appears on the site location on top
    cy.get('.dcp-header-location-link').contains('New South Wales');
  
  //Press the Filter button
    cy.get('.filter-toggle').click();    
  
  //Filter by pre-owned
    cy.contains('button', ' Pre-Owned').click();
  
  //Filter by color 
  //Brilliant Blue Metallic was the first color that had mor than one vehicle available
    cy.get('.filter-toggle', { timeout: 120000 } ).click();  
    cy.contains('p', 'Colour').click();
    cy.get('[data-test-id="multi-select-dropdown-card-opener"]').filter(':visible').click();
    cy.contains('li', ' Brilliant Blue Metallic ');
  
  //Navigate and enter the Vehicle details of the most expensive car on the filtered list
  //Here will be checked the most expensive car, other way was to filter from the highest to lowest price

  //Validate that the price clicked is presented on the Vehicle page
    cy.get('[data-test-id="dcp-cars-product-tile-price"]').contains(' A$94,990.00 ').click;
  //  cy.get('.YOUR_BUTTON_CLASS').contains('Customer');
  
  //Save some vehicle details to a file (VIN number, Model Year)
    cy.get('[data-test-id="dcp-cars-buy-box-vehicle-characteristics-model-year"]').invoke('text').as('VINnumber');
    cy.get('.dcp-vehicle-details-list-item__value').invoke('text').as('ModelYear');
    cy.get('@VINnumber').then((VINnumber) => {
      cy.get('@ModelYear').then((ModelYear) => {
        cy.writeFile('testindata.txt', { VINnumber,ModelYear })
    })  
  })
    //cy.writeFile('path/to/data.json', { VINnumber,ModelYear })
  
  //Click Enquire Now
    cy.contains('a', ' Enquire Now ').click();
  
  //Fill the “Contact Details and Account Creation” form with invalid data. 
    cy.contains('label', ' First Name ').type('Thomas');
    cy.get('[data-test-id="rfq-contact__last-name"]').type('Anderson');
    cy.get('[data-test-id="rfq-contact__email"]').type('followthewhiterabbit@');
    cy.get('[data-test-id="rfq-contact__phone"]').type('0001');
    cy.get('[data-test-id="rfq-contact__postal-code"]').type('2024');
  
  //Validate that the error messages appears on email, phone number and post code
    cy.get('.check-boxes').should('be.visible').contains('Customer');
    cy.get('.check-boxes').should('be.visible').contains('Customer');
    cy.get('.check-boxes').should('be.visible').contains('Customer');
  
  //Click Proceed  
    cy.get('[type="radio"]').click();
  
  //Validate the error message
    cy.get('.check-boxes').should('be.visible').contains('Customer');
  
  }) 
})
