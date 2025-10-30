describe('case a cocher', function () {
    it('',()=>{
        cy.visit('https://the-internet.herokuapp.com/checkboxes')

     cy.get('#checkboxes input').eq(0).check()
        cy.get('#checkboxes input').eq(0).should('be.checked')
    })
});