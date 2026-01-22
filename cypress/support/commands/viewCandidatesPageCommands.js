import viewCandidatesPageElements from "../elements/viewCandidatesPageElements"
const ViewCandidatesPageElements = new viewCandidatesPageElements

Cypress.Commands.add('verifyLoadHomePage', () =>{
    
    cy.get(ViewCandidatesPageElements.headerBanner()).
    should('exist')
});

Cypress.Commands.add('clickAddButtom', () =>{
    cy.get(ViewCandidatesPageElements.buttomAdd()).
    should('be.visible').
    click ()
    .wait(1500)
});

Cypress.Commands.add('clickSearchButtom', () =>{
    cy.get(ViewCandidatesPageElements.buttomSearch()).
    should('be.visible').
    click ()
    .wait(1500)
});

Cypress.Commands.add('clickResetButtom', () =>{
    cy.get(ViewCandidatesPageElements.buttomReset()).
    should('be.visible').
    click ()
    .wait(1500)
});
