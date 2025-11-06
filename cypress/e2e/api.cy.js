describe('', function () {
    it('Appel Get',()=>{
        cy.request('GET','https://api.restful-api.dev/objects').then((response)=>{
           expect(response.status).to.eq(200)
            expect(response.body.length).to.be.greaterThan(5);

        })
    })

});



describe('Mock d’API avec intercept', () => {
    it('intercepte et modifie la réponse de /comments/1', () => {
        cy.intercept('GET', '**/comments/*', {
            statusCode: 200,
            body: {
                postId: 1,
                id: 1,
                name: 'Emmanuel QA',
                email: 'emmanuel@test.com',
                body: 'Ceci est une réponse mockée pour le test.'
            }
        }).as('getComment');

        // Visite la page de test
        cy.visit('https://example.cypress.io/commands/network-requests');

        // Clique sur le bouton qui déclenche la requête
        cy.contains('Get Comment').click();

        // Attends la requête interceptée
        cy.wait('@getComment');

        // Vérifie que le contenu affiché correspond à la réponse mockée
        // cy.get('.network-comment').should('contain', 'Emmanuel QA');
        cy.get('.network-comment').should('contain', 'Ceci est une réponse mockée pour le test.');
    });
});
