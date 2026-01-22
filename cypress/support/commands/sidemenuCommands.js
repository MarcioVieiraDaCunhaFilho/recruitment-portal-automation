import sidemenuElements from "../elements/sidemenuElements"
const SidemenuElements = new sidemenuElements

Cypress.Commands.add('verifyLoadHomePage', () =>{
    
    cy.get(ViewCandidatesPageElements.headerBanner()).
    should('exist')
});