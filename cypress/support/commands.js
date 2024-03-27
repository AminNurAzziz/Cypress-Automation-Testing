Cypress.Commands.add('login', (username, password) => {
    cy.visit('/login');
    cy.get('input[name=username]').type(username);
    cy.get('input[name=password]').type(`${password}{enter}`);
    cy.url().should('include', '/admin/produk');
});
