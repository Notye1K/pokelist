/// <reference types="cypress" />

it('given a comment, the comment should render correctly', () => {
    const url = 'http://localhost:5173'
    const userName = 'john'
    const comment = 'This is a comment'
    cy.visit(url)
    cy.login(userName)
    cy.contains('Bulbasaur').click()
    cy.url().should('equal', url + '/bulbasaur')
    cy.get('textarea').type(comment)
    cy.contains('send').click()
    cy.contains(comment).should('be.visible')
})
