
/// <reference types="cypress" />

// Testes simples das funções básicas:
describe('template spec', () => {
  // Soma
  it('+', () => {
    cy.visit('http://localhost:5173/')
    cy.get(':nth-child(11)').click()
    cy.get('#plus').click()
    cy.get('button').contains('1').click()
    cy.get('#equal').click()
    cy.get('.display-container').should("have.a.text", "2")
  })

  // + (erro) - esprado é 27.5
  it('+ (erro)', () => {
    cy.visit('http://localhost:5173/')
    cy.get('button').contains('1').click();
    cy.get('button').contains('0').click();
    cy.get('#plus').click();
    cy.get('button').contains('8').click();
    cy.get(':nth-child(16)').click();
    cy.get('button').contains('5').click();
    cy.get('#plus').click();
    cy.get('button').contains('9').click();
    cy.get('#equal').click()
    cy.get('.display-container').should("have.a.text", "27.5");
  })
  
  // soma e subtracao
  it('+-', () => {
    cy.visit('http://localhost:5173/')
    cy.get('button').contains('1').click();
    cy.get('button').contains('7').click();
    cy.get('button').contains('3').click();
    cy.get('#plus').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('1').click();
    cy.get('button').contains('1').click();
    cy.get('#equal').click()
    cy.get('.display-container').should("have.a.text", "384");
    cy.get(':nth-child(10)').click();
    cy.get('button').contains('7').click();
    cy.get('button').contains('8').click();
    cy.get('#equal').click()
    cy.get('.display-container').should("have.a.text", "306");
  }) 
  
  // soma e multiplicação (erro)
  it('+*', () => {
    cy.visit('http://localhost:5173/')
    cy.get('button').contains('7').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('0').click();
    cy.get('#plus').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('4').click();
    cy.get('button').contains('4').click();
    cy.get('#equal').click()
    cy.get('.display-container').should("have.a.text", "744"); // resultado aparece errado na  - certo: 744
    cy.get('.panel > :nth-child(6)').click();
    cy.get('button').contains('4').click();
    cy.get('button').contains('1').click();
    cy.get('#equal').click()
    cy.get('.display-container').should("have.a.text", "30504");
  })
  
  // soma e divisao
  it('+/', () => {
    cy.visit('http://localhost:5173/')
    cy.get('button').contains('1').click();
    cy.get('button').contains('7').click();
    cy.get('#plus').click();
    cy.get('button').contains('4').click();
    cy.get('#equal').click()
    cy.get('.display-container').should("have.a.text", "21");
    cy.get('.panel > :nth-child(2)').click();
    cy.get('button').contains('4').click();
    cy.get('#equal').click()
    cy.get('.display-container').should("have.a.text", "5.25");
    
  })

  // Subtração
  it('subtracao', () => {
    cy.visit('http://localhost:5173/')
    cy.get('button').contains('1').click();
    cy.get('button').contains('8').click();
    cy.get('button').contains('9').click();
    cy.get(':nth-child(10)').click();
    cy.get('button').contains('6').click();
    cy.get('button').contains('2').click();
    cy.get('#equal').click()
    cy.get('.display-container').should("have.a.text", "127")
  })

  // multiplicação
  it('multiplicacao', () => {
    cy.visit('http://localhost:5173/')
    cy.get('button').contains('8').click();
    cy.get('button').contains('4').click();
    cy.get('.panel > :nth-child(6)').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('6').click();
    cy.get('#equal').click()
    cy.get('.display-container').should("have.a.text", "2184")
  })

  // Divisão
  it('divisao', () => {
    cy.visit('http://localhost:5173/')
    cy.get('button').contains('7').click();
    cy.get(':nth-child(16)').click();
    cy.get('button').contains('5').click();
    cy.get('.panel > :nth-child(2)').click();
    cy.get('button').contains('3').click();
    cy.get('#equal').click()
    cy.get('.display-container').should("have.a.text", "2.5")
  })

})