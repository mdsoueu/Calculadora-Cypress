
/// <reference types="cypress" />

// Testes simples das funções básicas:
describe('template spec', () => {
  describe('Testes - erros', () => {
    it('soma com números negativos (erro)', () => {
      cy.visit('http://localhost:5173/')
      cy.get(':nth-child(10)').click()
      cy.get('button').contains('1').click()
      cy.get('button').contains('5').click()
      cy.get('button').contains('5').click()
      cy.get('#plus').click()
      cy.get('button').contains('2').click()
      cy.get('button').contains('0').click()
      cy.get('button').contains('8').click()
      cy.get('#equal').click()
      cy.get('.display-container').should("have.a.text", "53")

    })
    it('soma com ponto (erro)', () => {
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
    it('soma e multiplicação (erro)', () => {
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
    it('subtração com número negativo(erro)', () => {
      cy.visit('http://localhost:5173/')
      cy.get(':nth-child(10)').click()
      cy.get('button').contains('3').click();
      cy.get('button').contains('6').click();
      cy.get('button').contains('1').click();
      cy.get(':nth-child(10)').click()
      cy.get('button').contains('1').click();
      cy.get('button').contains('1').click();
      cy.get('button').contains('0').click();
      cy.get('#equal').click()
      cy.get('.display-container').should("have.a.text", "-471")
    })
    it('apertar algumas vezes o botão igual e resultado permanecer', () => {
      cy.visit('http://localhost:5173/')
      cy.get('button').contains('4').click();
      cy.get('#plus').click()
      cy.get('button').contains('1').click();
      cy.get('button').contains('0').click();
      cy.get('#equal').click()
      cy.get('.display-container').should("have.a.text", "14")
      cy.get('#equal').click()
      cy.get('#equal').click()
      cy.get('#equal').click()
      cy.get('.display-container').should("have.a.text", "14")
    })
  })

  describe('Testes de soma', () => {
    it('Soma', () => {
      cy.visit('http://localhost:5173/')
      cy.get(':nth-child(11)').click()
      cy.get('#plus').click()
      cy.get('button').contains('1').click()
      cy.get('#equal').click()
      cy.get('.display-container').should("have.a.text", "2")
    })
    it('soma e subtracao', () => {
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
    it('soma e divisao', () => {
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
  })

  describe('Testes de subtração', () => {
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
    it('subtração e divisão', () => {
      cy.visit('http://localhost:5173/')
      cy.get('button').contains('2').click();
      cy.get('button').contains('5').click();
      cy.get('button').contains('6').click();
      cy.get(':nth-child(10)').click();
      cy.get('button').contains('8').click();
      cy.get('button').contains('6').click();
      cy.get('#equal').click()
      cy.get('.display-container').should("have.a.text", "170")
      cy.get('.panel > :nth-child(2)').click()
      cy.get('button').contains('4').click();
      cy.get('#equal').click()
      cy.get('.display-container').should("have.a.text", "42.5")
    })
    it('subtração e multiplicação', () => {
      cy.visit('http://localhost:5173/')
      cy.get('button').contains('5').click();
      cy.get('button').contains('7').click();
      cy.get(':nth-child(10)').click();
      cy.get('button').contains('9').click();
      cy.get('#equal').click()
      cy.get('.display-container').should("have.a.text", "48")
      cy.get('.panel > :nth-child(6)').click()
      cy.get('button').contains('5').click();
      cy.get('#equal').click()
      cy.get('.display-container').should("have.a.text", "240")
    })
    it('subtração e ponto', () => {
      cy.visit('http://localhost:5173/')
      cy.get('button').contains('6').click();
      cy.get(':nth-child(16)').click()
      cy.get('button').contains('5').click();
      cy.get(':nth-child(10)').click();
      cy.get('button').contains('1').click();
      cy.get(':nth-child(16)').click()
      cy.get('button').contains('2').click();
      cy.get('#equal').click()
      cy.get('.display-container').should("have.a.text", "5.3")
    })
  })

  describe('Testes de multiplição', () => {
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
    it('multiplicação com divisão', () => {
      cy.visit('http://localhost:5173/')
      cy.get('button').contains('6').click();
      cy.get('button').contains('0').click();
      cy.get('button').contains('2').click();
      cy.get('.panel > :nth-child(6)').click();
      cy.get('button').contains('2').click();
      cy.get('button').contains('2').click();
      cy.get('#equal').click()
      cy.get('.display-container').should("have.a.text", "13244")
      cy.get('.panel > :nth-child(2)').click()
      cy.get('button').contains('8').click();
      cy.get('button').contains('0').click();
      cy.get('#equal').click()
      cy.get('.display-container').should("have.a.text", "165.55")
    })
    it('multiplicação com ponto', () => {
      cy.visit('http://localhost:5173/')
      cy.get('button').contains('3').click();
      cy.get('button').contains('8').click();
      cy.get('.panel > :nth-child(6)').click()
      cy.get('button').contains('8').click();
      cy.get(':nth-child(16)').click()
      cy.get('button').contains('5').click();
      cy.get('#equal').click()
      cy.get('.display-container').should("have.a.text", "323")
    })
  })

  describe('Testes de divisão', () => {
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
    it('divisão com ponto', () => {
      cy.visit('http://localhost:5173/')
      cy.get('button').contains('2').click();
      cy.get('button').contains('4').click();
      cy.get('.panel > :nth-child(2)').click();
      cy.get('button').contains('1').click();
      cy.get(':nth-child(16)').click()
      cy.get('button').contains('8').click();
      cy.get('#equal').click()
      cy.get('.display-container').should("have.a.text", "13.333333333333332")
    })

    it('divisão e multiplição', () => {
      cy.visit('http://localhost:5173/')
      cy.get('button').contains('2').click();
      cy.get('button').contains('9').click();
      cy.get('.panel > :nth-child(2)').click()
      cy.get('button').contains('4').click();
      cy.get('button').contains('2').click();
      cy.get('#equal').click()
      cy.get('.display-container').should("have.a.text", "0.6904761904761905")
      cy.get('.panel > :nth-child(6)').click()
      cy.get('button').contains('4').click();
      cy.get('button').contains('0').click();
      cy.get('#equal').click()
      cy.get('.display-container').should("have.a.text", "27.61904761904762")
    })
  })

  describe('Teste diversos', () => {
    it('Apertar duas vezes o botão igual', () => {
      cy.visit('http://localhost:5173/')
      cy.get('button').contains('4').click();
      cy.get('button').contains('4').click();
      cy.get('#equal').click()
      cy.get('#equal').click()
      cy.get('.display-container').should("have.a.text", "44")
    })
    it('apertar várias vezes o botão *', () => {
      cy.visit('http://localhost:5173/')
      cy.get('button').contains('1').click();
      cy.get('button').contains('2').click();
      cy.get('.panel > :nth-child(6)')
      cy.get('.panel > :nth-child(6)')
      cy.get('.panel > :nth-child(6)')
      cy.get('.panel > :nth-child(6)')
      cy.get('.panel > :nth-child(6)')
      cy.get('.panel > :nth-child(6)')
      cy.get('.panel > :nth-child(6)')
      cy.get('.panel > :nth-child(6)')
      cy.get('.panel > :nth-child(6)')
      cy.get('.panel > :nth-child(6)')
      cy.get('.panel > :nth-child(6)')
      cy.get('.panel > :nth-child(6)')
      cy.get('.display-container').should("have.a.text", "12")
    })
    it('aperta o número 0 (zero) primeiro', () => {
      cy.visit('http://localhost:5173/')
      cy.get('button').contains('0').click();
      cy.get(':nth-child(16)').click()
      cy.get('button').contains('5').click();
      cy.get('#plus').click()
      cy.get('button').contains('1').click();
      cy.get(':nth-child(16)').click()
      cy.get('button').contains('5').click();
      cy.get('#equal').click()
      cy.get('.display-container').should("have.a.text", "2")
    })
    it('Mesmo número com dois pontos', () => {
      cy.visit('http://localhost:5173/')
      cy.get('button').contains('4').click();
      cy.get(':nth-child(16)').click()
      cy.get('button').contains('1').click();
      cy.get('button').contains('8').click();
      cy.get('button').contains('7').click();
      cy.get(':nth-child(16)').click()
      cy.get('button').contains('0').click();
      cy.get('button').contains('0').click();
      cy.get('.panel > :nth-child(2)').click()
      cy.get('button').contains('5').click();
      cy.get('#equal').click()
    })
  })
})