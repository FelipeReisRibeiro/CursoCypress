
/// <reference types="Cypress" />           // comentario especial para buscar as bibliotescas cypress

describe('CEntral de Atendimento ao Cliente TAT', function(){   //suite de teste
    beforeEach(function() { //vai rodar antes de tudo para todos os testes
        cy.visit('./src/index.html')        //cy.visit comando para acessar algum local  ex. um caminho uma pagina da internet cy.visit('https://google.com')
    })

    
    it('verifica o titulo da aplicação', function() {       // cada teste tem o it que é a função do teste
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    
    
    it('preenche os campos obrigatorios e envia o formulario', function() {       // cada teste tem o it que é a função do teste
        const longText = 'Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste'
        cy.get('#firstName').type('Felipe')
        cy.get('#lastName').type('Ribeiro')
        cy.get('#email').type('felipereiribeiro@gmail.com')
        cy.get('#open-text-area').type(longText, { delay: 0})           //delay para que o passo de texto longo dentro da variavel seja executado mais rapido 
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })


    it('Exibe a mensagem de erro ao submeter o formulario com um email com formato errado utilizando , em vez do .', function(){
        cy.get('#firstName').type('Felipe')
        cy.get('#lastName').type('Ribeiro')
        cy.get('#email').type('felipereiribeiro@gmaill,com')
        cy.get('#open-text-area').type('Text')
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })
    
    it('valida se o campo de telefone so aceita numeros devendo continuar vazio se utilizar letras', function(){
        cy.get('#phone')
        .type('abcdefghij')
        .should('have.value', '')   // primeiro no c get pega o campo depois no type tenta digitar letras depois no should pergunta se o valor do campo continua vazio como dentro das ''
    })

    it('testando campo obrigatorio nao preenchido', function(){
        cy.get('#firstName').type('Felipe')
        cy.get('#lastName').type('Ribeiro')
        cy.get('#email').type('felipereiribeiro@gmaill,com')
        cy.get('#phone-checkbox').click         // vai pegar o campo checkbox e vai clicar nele
        cy.get('#open-text-area').type('Text')
        cy.get('button[type="submit"]').click()      
        cy.get('.error').should('be.visible')
    })

    it('testando campo obrigatorio nao preenchido', function(){
        cy.get('#firstName')
        .type('Felipe')
        .should('have.value', 'Felipe')  // valida se o campo realmente conte o texto digitado
        cy.get('#lastName')
        .type('Ribeiro')
        .should('have.value', 'Ribeiro')
        cy.get('#email')
        .type('felipereiribeiro@gmaill,com')
        .should('have.value', 'felipereiribeiro@gmaill,com')
        cy.get('#firstName').clear()
        cy.get('#lastName').clear()
        cy.get('#email').clear()
    })
    
    it('exibe mensagem de erro ao submeter o formulario sem preencher os campos abrigatorio', function(){
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
    
    it('envia formulario com sucesso utilizando comando customizado', function(){
        cy.fillMandatoryFieldsAndSubmit()           // comando customizado criado dentro de suport>commands
        cy.get('.success').should('be.visible')
    })

    it('envia formulario com sucesso utilizando comando cy.contains', function(){
        cy.get('#firstName').type('Felipe')
        cy.get('#lastName').type('Ribeiro')
        cy.get('#email').type('felipereiribeiro@gmaill,com')
        cy.get('#open-text-area').type('Text')
        cy.contains('button', 'Enviar').click()      //encontra o elemento de button que contem Enviar e da um click
        cy.get('.error').should('be.visible')
    })
})