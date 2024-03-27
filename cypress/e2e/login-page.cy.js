describe('Login', () => {
    beforeEach(() => {
        const username = 'admin';
        const password = 'admin';
        cy.login(username, password);
    });

    it('should successfully log in', () => {
        cy.get('span').should('contain', 'Admin');
    });
});
