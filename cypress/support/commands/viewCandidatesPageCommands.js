import viewCandidatesPageElements from "../elements/viewCandidatesPageElements"
const ViewCandidatesPageElements = new viewCandidatesPageElements

Cypress.Commands.add('verifyLoadHomePage', () =>{
    
    cy.get(ViewCandidatesPageElements.headerBanner()).
    should('exist')
});

