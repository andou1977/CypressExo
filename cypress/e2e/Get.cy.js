describe('Get Object', function () {
    it('',()=>{
        cy.request('GET','https://api.restful-api.dev/objects').then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.be.an('array')
        })
    })
});