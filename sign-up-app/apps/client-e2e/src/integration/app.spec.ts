import { getThanks, } from '../support/app.po';

describe('client', () => {
  beforeEach(() => { 
    cy.visit('/success')

  });

  it('should display welcome message', () => {

    getThanks().contains("Thanks for signin' up!"); 
  });

  

});
