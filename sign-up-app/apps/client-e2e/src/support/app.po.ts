// DOM element tests
export const getGreeting = () => cy.get('div');
export const getAddSignUpButton = () => cy.get('[data-cy=sign-up]').click()
export const getUsersList = () => cy.get('[data-cy=users-list]');

// API connection tests
export const getAllUsers = () => cy.request('GET', 'users');
// // export const getUser = () => cy.request('GET', 'users/0');
// export const getUser = () => cy.request({
//                  method: 'GET',
//                  url: 'users',
//                  body: {   
//                         firstName: 'New', 
//                         lastName: 'User', 
//                         email: 'newuser@shield.ai', 
//                         password: '1234'              
//                       }
//             });
// export const getUser = () => cy.intercept('GET', 'users/0', {   
//     firstName: 'New', 
//     lastName: 'User', 
//     email: 'newuser@shield.ai', 
//     password: '1234'              
//   })
export const addUser = () => cy.request('POST', 'users/add'); // fix route naming on server side
export const updateUser = () => cy.request('PUT', 'users/0');
export const deleteUser = () => cy.request('DELETE', 'users/0');




