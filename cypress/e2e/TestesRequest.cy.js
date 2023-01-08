// para rodar um teste simulando um dispositivo mobile utilizar o comando  --config viewportWidth=370,viewportHeight=660 no arquivo package.json como na linha 8 deste projeto

describe('CEntral de Atendimento ao Cliente TAT', function(){   //suite de teste
    const Tres_Segundos = 3000
    beforeEach(function() { //vai rodar antes de tudo para todos os testes
        cy.visit('./src/index.html')        //cy.visit comando para acessar algum local  ex. um caminho uma pagina da internet cy.visit('https://google.com')
    })

it('Faz uma requisicao http', function() { //com esta função ser para verificar uma msg que aparece na tela e depois some  ex verifica se a msg esta visivel agora avanca 3s verifica se ele nao esta mais visivel
    cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
    .should(function(response) {  //criando a função de requisição 
        const{ status, statusText, body } = response
        expect(status).to.equal(200)
        expect(statusText).to.equal('OK')
        expect(body).to.include('CAC TAT')
    })

    })

it('desafio do gato - encontra o gato escondido', function(){
    cy.get('#cat')      // pega o elemento do gato que nao esta visivel
    .invoke('show')     // invoca o elemento do gato para tornar visivel
    .should('be.visible')   // verifica se o elemento esta visivel
    cy.get('#title')
    .invoke('text', 'CAT TAT')  // alterando o titulo
    cy.get('#subtitle')
    .invoke('text', 'Eu ❤️ gatos' )  // alterando o subtitulo
    })

})