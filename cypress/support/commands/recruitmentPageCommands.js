import recruitmentPageElements from "../elements/recruitmentPageElements"
const RecruitmentPageElements = new recruitmentPageElements

Cypress.Commands.add('verifyLoadHomePage', () =>{
    cy.get(RecruitmentPageElements.headerBanner()).
    should('exist')
});

