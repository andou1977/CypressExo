describe('', function () {
    it('',()=>{
        cy.visit('https://example.cypress.io/todo')
        cy.get('.new-todo').type('Acheter du lait')
        cy.get('.new-todo').should('have.value','Acheter du lait')
    })

});