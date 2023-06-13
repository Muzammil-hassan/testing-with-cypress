/// <reference types="cypress"/>

context('About Page', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('should render the about page and display a message', () => {
    cy.get('h1').contains('About');
  });
});
