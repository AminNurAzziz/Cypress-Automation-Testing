describe('Logout', () => {
    beforeEach(() => {
        const username = 'admin';
        const password = 'admin';
        cy.login(username, password);
    });

    it('should successfully log out', function () {
        cy.get('button.btn-close').click();
        cy.get('a.nav-link.dropdown-toggle').click();
        cy.contains('Logout').click();
        cy.get('.btn-close').click();
        cy.url().should('include', '/login');
    });
});
