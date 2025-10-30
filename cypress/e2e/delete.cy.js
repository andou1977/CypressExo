describe('DELETE /objects/:id', () => {
    it('should delete the object', () => {
        cy.request('DELETE', 'https://api.restful-api.dev/objects/6').then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});