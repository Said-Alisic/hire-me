// DOM element tests
export const getThanks = () => cy.get('[data-cy=signup-thanks]');
export const getAddSignUpButton = () => cy.get('[data-cy=sign-up]').click()
export const getUsersTable = () => cy.get('[data-cy=users-table]');
