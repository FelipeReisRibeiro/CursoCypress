Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Felipe')
    cy.get('#lastName').type('Ribeiro')
    cy.get('#email').type('felipereiribeiro@gmail.com')
    cy.get('#open-text-area').type('Teste')           //delay para que o passo de texto longo dentro da variavel seja executado mais rapido 
    cy.get('button[type="submit"]').click()
})