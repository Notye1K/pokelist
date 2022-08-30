/// <reference types="cypress" />

describe('e2e', () => {
    const url = 'http://localhost:5173'
    const lastCall = 'https://pokeapi.co/api/v2/pokemon-species/20/'

    it('given a pokemon name, the page should change to pokemon page', () => {
        const pokeName = 'Pikachu'
        cy.visit(url)
        cy.intercept('GET', lastCall).as('pokeapi')
        cy.wait('@pokeapi')
        cy.get('header input').type(pokeName + '{enter}')
        cy.url().should('equal', `${url}/${pokeName.toLowerCase()}`)
        cy.contains(pokeName).should('be.visible')
    })

    it('in mainPage when next button is clicked, pokemons should change', () => {
        const pokeName = 'Ninetales'
        cy.visit(url)
        cy.contains('Next').click()
        cy.contains(pokeName).should('be.visible')
    })

    it('in pokePage when next button is clicked, pokemon should change', () => {
        const pokeName = 'Raichu'
        cy.visit(url + '/pikachu')
        cy.contains('Next').click()
        cy.contains(pokeName).should('be.visible')
    })

    it('when ChevronRight is clicked, numbers should scroll', () => {
        cy.visit(url)
        cy.intercept('GET', lastCall).as('pokeapi')
        cy.wait('@pokeapi')
        cy.get('[data-testid="ChevronRightIcon"]').click()
        cy.get('.pages').contains('12').should('be.visible')
    })

    it('in pokePage when home button is clicked, should return to main page', () => {
        cy.visit(url + '/pikachu')
        cy.get('[data-testid="HomeIcon"]').click()
        cy.url().should('equal', url + '/')
    })
})
