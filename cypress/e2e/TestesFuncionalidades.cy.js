// para rodar um teste simulando um dispositivo mobile utilizar o comando  --config viewportWidth=370,viewportHeight=660 no arquivo package.json como na linha 8 deste projeto

describe('CEntral de Atendimento ao Cliente TAT', function(){   //suite de teste
    const Tres_Segundos = 3000
    beforeEach(function() { //vai rodar antes de tudo para todos os testes
        cy.visit('./src/index.html')        //cy.visit comando para acessar algum local  ex. um caminho uma pagina da internet cy.visit('https://google.com')
    })

it('exibe mensagem por 3 segundos', function() { //com esta função ser para verificar uma msg que aparece na tela e depois some  ex verifica se a msg esta visivel agora avanca 3s verifica se ele nao esta mais visivel

    cy.clock()      // 
    cy.get('#firstName').type('Felipe')
    cy.get('#lastName').type('Ribeiro')
    cy.get('#email').type('felipereiribeiro@gmaill,com')
    cy.get('#open-text-area').type('Text')
    cy.contains('button', 'Enviar').click()      //encontra o elemento de button que contem Enviar e da um click
    cy.get('.error').should('be.visible')
    cy.tick(3000)

    cy.get('.error').should('not.be.visible')

    })
    Cypress._.times(5,function(){           // comando utilizado para que o teste rode o tatal de vezes que voce definir neste caso 5x
it('exibe mensagem por 3 segundos', function() { //com esta função ser para verificar uma msg que aparece na tela e depois some  ex verifica se a msg esta visivel agora avanca 3s verifica se ele nao esta mais visivel

    cy.clock()      // 
    cy.get('#firstName').type('Felipe')
    cy.get('#lastName').type('Ribeiro')
    cy.get('#email').type('felipereiribeiro@gmaill,com')
    cy.get('#open-text-area').type('Text')
    cy.contains('button', 'Enviar').click()      //encontra o elemento de button que contem Enviar e da um click
    cy.get('.error').should('be.visible')
    cy.tick(Tres_Segundos)   //criada variavel que indica 3000 la no inicio da pagina
    cy.get('.error').should('not.be.visible')
        })
    })
it('exibe e esconde mensagem de sucesso e erro utilizando o invoke', function() { 
    cy.get('.success')      //pega o elemento 
    .should('not.be.visible') // verifica que ele nao esta visivel
    .invoke('show') // invoca a mensagem de seccess
    .should('be.visible') // verifica se realmente esta visivel
    .and('contain', 'Mensagem enviada com sucesso.')
    .invoke('hide')  // faz com que a msg nao estaja mais visivel
    .should('not.be.visible') // verifica se realmente nao esta visivel
    cy.get('.error')
    .should('not.be.visible')
    .invoke('show')
    .should('be.visible')
    .and('contain', 'Valide os campos obrigatórios!')
    .invoke('hide')
    .should('not.be.visible')
    })
        
it('preenche a area de texto usando o comando invoke', function() {
    const longText = Cypress._.repeat('0123456789', 20)
    cy.get('#open-text-area')   // pega o elemento
    .invoke('val', longText)    //seta dentro do elemento o texto longo
    .should('have.value', longText) // verifica se esta o texto longo
    })
})
