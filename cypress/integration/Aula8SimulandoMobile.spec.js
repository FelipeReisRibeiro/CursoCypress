// para rodar um teste simulando um dispositivo mobile utilizar o comando  --config viewportWidth=370,viewportHeight=660 no arquivo package.json como na linha 8 deste projeto

it('simulando um dispositivo com 410 pixels de largura e 860 pixels de altura', function() {
    cy.visit('./src/privacy.html')
    
})