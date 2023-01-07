it('Testa a pagina de politica de privacidade de forma independente', function() {  //Muito importante este teste
    cy.visit('./src/privacy.html')
    cy.contains('Talking About Testing').should('be.visible')
    
})