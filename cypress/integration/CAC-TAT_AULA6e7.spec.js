/// <reference types="Cypress" />           // comentario especial para buscar as bibliotescas cypress

describe('CEntral de Atendimento ao Cliente TAT', function(){   //suite de teste
    beforeEach(function() { //vai rodar antes de tudo para todos os testes
        cy.visit('./src/index.html')        //cy.visit comando para acessar algum local  ex. um caminho uma pagina da internet cy.visit('https://google.com')
    })
 
    it('fazendo upload de arquivo fixtures', function() {       // cada teste tem o it que é a função do teste
        cy.get('input[type="file"]')
        .should('not.have.value')
        .selectFile('./cypress/fixtures/example.json')
        .should(function($input){
            console.log($input)
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })
    
    it('Seleciona um arquivo utilizando o drag-oad-drop', function() {
        cy.get('input[type="file"]')
        .should('not.have.value')
        .selectFile('./cypress/fixtures/example.json', {action: 'drag-drop'})
        .should(function($input){
            console.log($input)
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })

    it('Seleciona um arquivo utilizando uma fixture para qual foi dada um alias', function() {
        cy.fixture('example.json').as('sampleFile')
        cy.get('input[type="file"]')
        .selectFile('@sampleFile')
        .should(function($input){
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })

    it('verifica que a politica de privacidade abre em outra aba sem a necessidade de dar um clique', function() {
        cy.get('#privacy a').should('have.attr', 'target', '_blank')
    })

    it('acessa a pagina da politica de privacidade removendo o target e entao clicar no link', function() {  //Muito importante este teste
        cy.get('#privacy a')
        .invoke('removeAttr', 'target')   // comando para quando o sistema for abrir uma nova aba ele abrir na pagina ja aberta nao abrindo outra
        .click()
        cy.contains('Talking About Testing').should('be.visible')
    })
    
    
})

