describe('', function () {
    it('TodoMvc',()=>{
        cy.visit('https://todomvc.com/')
         cy.get('.link').eq(5).click()
        cy.get('.new-todo').type('Robot Framework{enter}')
        cy.get('.new-todo').type('Selenium{enter}')
        cy.get('.new-todo').type('Angular{enter}')
        cy.get('.toggle').eq(0).check()
        cy.get('.toggle').eq(1).check()

       cy.get('.todo-count').should('contain','1 item left')
       cy.contains('.todo-count','1 item left')



    })
});