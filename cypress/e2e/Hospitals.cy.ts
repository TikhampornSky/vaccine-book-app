describe('Vaccine Book App Test', () => {
  it('Should have video', () => {
    cy.visit('/')

    cy.get('video').should('exist')
    cy.get('[data-test-id="video-button"]').should('contain', 'Pause');
    cy.get('video').should('have.prop', 'paused', false);

    cy.wait(5000)

    cy.get('[data-test-id="video-button"]').click()
    cy.get('[data-test-id="video-button"]').should('contain', 'Play');
    cy.get('video').should('have.prop', 'paused', true);

    cy.get('[data-test-id="hospitals-button"]').click()
    cy.get('img').should('have.length.at.least', 3)
  })
})