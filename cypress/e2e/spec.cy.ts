/// <reference types="cypress" />

describe('template spec', () => {
  it('1 + 1', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get(':nth-child(11)').click()
    cy.get('#plus').click()
    cy.get('button').contains('1').click()
    cy.get('#equal').click()
    cy.get('.display-container').should("have.a.text", "2")
  })

  it('1 - 1', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get(':nth-child(11)').click()
    cy.get(':nth-child(10)').click()
    cy.get('button').contains('1').click()
    cy.get('#equal').click()
    cy.get('.display-container').should("have.a.text", "0")
  })

  it('soma grande', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get(':nth-child(12)').click() // 2
    cy.get(':nth-child(8)').click() // 5
    cy.get('.panel > :nth-child(6)').click() // botão *
    // cy.get('button').contains('1').click()
    cy.get(':nth-child(11)').click() // 1
    cy.get(':nth-child(15)').click() // 0
    cy.get(':nth-child(15)').click() // 0
    cy.get('#equal').click() // =
    cy.get('.display-container').should("have.a.text", "2500") // resultado
    cy.get('.panel > :nth-child(2)').click() // botão %
    cy.get('.panel > :nth-child(7)').click() // 4
    cy.get(':nth-child(15)').click() //0
    cy.get('#equal').click() // =
    cy.get('.display-container').should("have.a.text", "65.5") // resultado

  })
})