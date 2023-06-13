/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

context('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render the home page and display a message', () => {
    cy.get('h1').contains('Home');
  });
});
