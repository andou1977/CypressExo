describe('Create and Update Object', () => {
    let objectId;

    it('should create a new object', () => {
        const newData = {
            name: 'QA Object',
            data: { type: 'initial', version: '1.0' }
        };

        cy.request('POST', 'https://api.restful-api.dev/objects', newData).then((response) => {
            expect(response.status).to.eq(200);
            objectId = response.body.id;
        });
    });

    it('should update the newly created object', () => {
        const updatedData = {
            name: 'Updated QA Object',
            data: { type: 'updated', version: '2.0' }
        };

        cy.request('PUT', `https://api.restful-api.dev/objects/${objectId}`, updatedData).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq(updatedData.name);
        });
    });
});