/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress
import Counter from '~/components/Counter';

// Cypress Component Test
describe('<Counter /> Component', () => {
  it('should render and display Counter', () => {
    cy.mount(<Counter />);
    cy.get('span').should('have.text', '0');
  });

  it('supports an "initial" prop to set the value', () => {
    cy.mount(<Counter initial={100} />);
    cy.get('[data-cy=counter]').should('have.text', '100');
  });

  it('when the increment button is pressed, the counter is incremented', () => {
    cy.mount(<Counter />);
    cy.get('[data-cy=increment]').click();
    cy.get('[data-cy=counter]').should('have.text', '1');
  });

  it('when the decrement button is pressed, the counter is decremented', () => {
    cy.mount(<Counter />);
    cy.get('[data-cy=decrement]').click();
    cy.get('[data-cy=counter]').should('have.text', '-1');
  });
});
