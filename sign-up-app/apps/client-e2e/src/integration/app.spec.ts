import { getRouter, getThanks, getAddSignUpButton, getUsersTable } from '../support/app.po';

describe('router render', () => {
  beforeEach(() => { 
    cy.visit('/')
  });
  it('should render "router-outlet"', () => {
    getRouter().should('exist');
  });
});

describe('success page', () => {
  beforeEach(() => { 
    cy.visit('/success')
  });
  it('should display "thank you message"', () => {
    getThanks().contains("Thanks for signin' up!"); 
  });
});

describe('sign-up page button', () => {
  beforeEach(() => { 
    cy.visit('/sign-up')
  });
  it('should render "sign-up button"', () => {
    getAddSignUpButton().should("exist");
  });
});

  describe('users page table', () => {
    beforeEach(() => { 
      cy.visit('/users')
    });
    it('should render "users table"', () => {
      getUsersTable().should("exist");
    });
});



