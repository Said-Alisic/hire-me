import { getThanks, } from '../support/app.po';

describe('client', () => {
  beforeEach(() => { 
    cy.visit('/')

  });

  it('should display welcome message', () => {
    before(() => { 
      cy.visit('/success')
  
    });

    getThanks().contains("Thanks for signin' up!"); 
  });


});
