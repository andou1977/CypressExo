describe('', function () {

    it('',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
        // cy.get('.inventory_item_name ').should('eq','Sauce Labs Backpack')
        cy.contains('.inventory_item_name ','Sauce Labs Backpack')

    })

});