import { getGreeting, getAddSignUpButton } from '../support/app.po';
import { User } from '@sign-up-app/api-interfaces';


describe('client', () => {
  let user: User;

  beforeEach(() => { 
    cy.visit('/')

    user = {   
      firstName: 'New', 
      lastName: 'User', 
      email: 'newuser@shield.ai', 
      password: '1234'              
    }
    
  });

  // it('should display welcome message', () => {
  //   // Custom command example, see `../support/commands.ts` file
  //   cy.login('my-email@something.com', 'myPassword');

  //   // Function helper example, see `../support/app.po.ts` file
  //   getGreeting().contains('Welcome to Shield Sign-Up!!'); // reference; delete before submission

  //   // getGreeting().should((m) => expect(m.length).equal(1));
  // });


});
