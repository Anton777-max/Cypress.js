afterEach('Конец теста', function () {
cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})