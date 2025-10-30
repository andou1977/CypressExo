describe('debutant', function () {
    it('welcome',()=>{

        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq','Swag Labs')

        cy.get('#user-name').type('andou')
        cy.get('#password').type('francais')
        cy.get('#user-name').should('have.value','andou')
        cy.get('#password').should('have.value','francais')
        cy.url().should('contains','saucedemo.com/')
    })
});