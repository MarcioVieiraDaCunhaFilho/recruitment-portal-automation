import loginPageElements from "../elements/loginPageElements"
const LoginPageElements = new loginPageElements

Cypress.Commands.add('acessLoginPage', () =>{
    cy.visit(Cypress.env("baseUrl"))
    cy.verifyLoadLoginPage()
});

Cypress.Commands.add('verifyLoadLoginPage', () =>{
    cy.get(LoginPageElements.headerHRM()).
    should('exist')
});

Cypress.Commands.add('verifyInvalidCredentialsAlert', () =>{
    cy.get(LoginPageElements.alertInvalidCredentials).
    should('exist')
});

Cypress.Commands.add('fillUsername', ()=>{
    cy.get(LoginPageElements.fieldUsername()).
    should('be.visible')
    .type(Cypress.env("usernameInfo"))
});

Cypress.Commands.add('fillIncorrectUsername', ()=>{
    cy.get(LoginPageElements.fieldUsername()).
    should('be.visible')
    .type(Cypress.env("usernameError"))
});

Cypress.Commands.add('fillPassword', ()=>{
    cy.get(LoginPageElements.fieldPassword()).
    should('be.visible')
    .type(Cypress.env("passwordInfo"))
});

Cypress.Commands.add('passwordFieldIsVisible', ()=>{
    cy.get(LoginPageElements.fieldPassword()).
    should('be.visible')
});

Cypress.Commands.add('usernameFieldIsVisible', ()=>{
    cy.get(LoginPageElements.fieldUsername()).
    should('be.visible')
});

Cypress.Commands.add('fillIncorrectPassword', ()=>{
    cy.get(LoginPageElements.fieldPassword()).
    should('be.visible')
    .type(Cypress.env("passwordError"))
});

Cypress.Commands.add('clickLoginButtom', () =>{
    cy.get(LoginPageElements.buttomLogin()).
    should('be.visible').
    click ()
    .wait(1500)
});

Cypress.Commands.add('clickForgotPasswordButtom', () =>{
    cy.get(LoginPageElements.buttomForgotPassword).
    should('be.visible').
    click ()
});

Cypress.Commands.add('verifyAlertRequiredField', () =>{
    cy.get(LoginPageElements.alertRequiredField).
    should('exist')
});