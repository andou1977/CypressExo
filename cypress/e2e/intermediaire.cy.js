describe('intermediaire', function () {
    it('',()=>{
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('#email1').type('koukou@gmail.com')
        cy.get('#email1').should('have.value','koukou@gmail.com')
        cy.get('.btn.btn-primary').first().click();
        cy.contains('p','Your form has been submitted!')

    })
});