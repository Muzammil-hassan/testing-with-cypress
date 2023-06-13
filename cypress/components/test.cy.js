/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress
import Test from '~/components/Test';

// Cypress Component Test
describe('<Test /> Component', () => {
  it('should render and display expected content', () => {
    // Mount the React component for the About page
    cy.mount(<Test />);

    // The new page should contain an h1 with "About page"
    cy.get('h1').contains('Test');
  });
});
