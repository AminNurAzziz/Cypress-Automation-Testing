describe('The Home Page', () => {
    beforeEach(() => {
        const username = 'admin';
        const password = 'admin';
        cy.login(username, password);
    });

    it('should display product list', () => {
        cy.visit('/admin/produk');
        cy.get('.produk').should('exist');
        cy.get('.header-title').should('contain', 'Produk');
    });

    it('should delete a product', () => {
        cy.visit('/admin/produk');
        cy.get('button[type="submit"]').first().click();
        cy.get('button.btn-secondary').click();
        cy.contains('tbody tr:first-of-type', 'Produk1').should('not.exist');
    });
});
