describe('post object', function () {


    it('',()=>{
        const add={
            name:'aeterndou p hghjgh hghjghjk'
        }
        cy.request('POST','https://api.restful-api.dev/objects',add).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq(add.name)
        })

    })



});