/// <reference types="Cypress" />           // comentario especial para buscar as bibliotescas cypress

describe('CEntral de Atendimento ao Cliente TAT', function(){   //suite de teste
    beforeEach(function() { //vai rodar antes de tudo para todos os testes
        cy.visit('./src/index.html')        //cy.visit comando para acessar algum local  ex. um caminho uma pagina da internet cy.visit('https://google.com')
    })
    
    it('Seleciona um produto (YouTube) por seu texto', function() {       // cada teste tem o it que é a função do teste
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        cy.get('#firstName').type('Felipe')
        cy.get('#lastName').type('Ribeiro')
        cy.get('#email').type('felipereiribeiro@gmaill.com')
        cy.get('#product').select('YouTube').should('have.value', 'youtube')     // comando para selecionar elementos de select
        cy.get('#open-text-area').type('Text')
        cy.get('button[type="submit"]').click()      
        
    })

    it('Seleciona um produto (mentoria) por seu value ou valor', function() {       // cada teste tem o it que é a função do teste
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        cy.get('#firstName').type('Felipe')
        cy.get('#lastName').type('Ribeiro')
        cy.get('#email').type('felipereiribeiro@gmaill.com')
        cy.get('#product').select('mentoria').should('have.value', 'mentoria')     // comando para selecionar elementos de select pelo valor
        cy.get('#open-text-area').type('Text')
        cy.get('button[type="submit"]').click()      
        
    })

    it('Seleciona um produto (Blog) por seu indice', function() {       // cada teste tem o it que é a função do teste
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        cy.get('#firstName').type('Felipe')
        cy.get('#lastName').type('Ribeiro')
        cy.get('#email').type('felipereiribeiro@gmaill.com')
        cy.get('#product').select(1).should('have.value', 'blog')     // comando para selecionar elementos de select pelo indice 1 pois ele é o primeiro indice
        cy.get('#open-text-area').type('Text')
        cy.get('button[type="submit"]').click()      
        
    })

    it('Seleciona um radio buton / check box - feedback', function() {       // cada teste tem o it que é a função do teste
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        cy.get('#firstName').type('Felipe')
        cy.get('#lastName').type('Ribeiro')
        cy.get('#email').type('felipereiribeiro@gmaill.com')
        cy.get('#product').select(1).should('have.value', 'blog')     // comando para selecionar elementos de select pelo indice 1 pois ele é o primeiro indice
        cy.get('input[type="radio"][value="feedback"]').check()       //comando para marcar um check box
        .should('have.value', 'feedback')     
        cy.get('#open-text-area').type('Text')
        cy.get('button[type="submit"]').click()
        
    })
    it('Marca cada tipo de atendimento', function() {       // cada teste tem o it que é a função do teste
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        cy.get('#firstName').type('Felipe')
        cy.get('#lastName').type('Ribeiro')
        cy.get('#email').type('felipereiribeiro@gmaill.com')
        cy.get('#product').select(1).should('have.value', 'blog')     // comando para selecionar elementos de select pelo indice 1 pois ele é o primeiro indice
        cy.get('input[type="radio"]')   // nesse casso ele vai verificar que tem 3 elementos desse
        .should('have.length', 3)       // verifica se o comprimento é 3 no casso 3 opções
        .each(function($radio){         // armazena os 3 radio buton
            cy.wrap($radio).check()     // utilizando para empacotar cada um dos 3 e marcar os 3
            cy.wrap($radio).should('be.checked')        //validar se marcou o check box - nesta função ele pega marca o primeiro vai para o proximo passo e valida,de pois vai para o segundo e valida depois vai para o 3 e valida
        })
        .should('be.checked')                       // utilizado para validar se o check box esta marcado     
        cy.get('#open-text-area').type('Text')
        cy.get('button[type="submit"]').click()
    })
    it('marca ambos checkbox depois desmarca', function() {
        cy.get('input[type="checkbox"]').check() // marca todos os elementos tipo check encontrados
        .should('be.checked') // valida se os checkbox estao marcados
        .last() //pega o ultimo
        .uncheck() // desmarca o ultimo
        .should('not.be.checked')   //valida se nao esta com check
    })
    it('testando campo obrigatorio nao preenchido utilizando o check e nao o click', function(){
        cy.get('#firstName').type('Felipe')
        cy.get('#lastName').type('Ribeiro')
        cy.get('#email').type('felipereiribeiro@gmaill,com')
        cy.get('#phone-checkbox').check()         // vai pegar o campo checkbox e vai clicar nele
        cy.get('#open-text-area').type('Text')
        cy.get('button[type="submit"]').click()      
        cy.get('.error').should('be.visible')
    })
})
