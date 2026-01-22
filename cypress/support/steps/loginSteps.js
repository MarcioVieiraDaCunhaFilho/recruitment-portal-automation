import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor"
import loginPageElements from "../elements/loginPageElements"
const LoginPageElements = new loginPageElements
import recruitmentPageElements from "../elements/recruitmentPageElements"
const RecruitmentPageElements = new recruitmentPageElements
import addCandidatePageElements from "../elements/addCandidatePageElements"
const AddCandidatePageElements = new addCandidatePageElements

Given ("the user acesses Orange HRM loginpage", () => {
    cy.acessLoginPage();

})

Then ("fills out username and password credentials", () => {
    cy.fillUsername();
    cy.fillPassword();
})

Then ("fills out incorrect username and password credentials", () => {
    cy.fillIncorrectUsername();
    cy.fillPassword();
})

Then ("fills out username and incorrect password credentials", () => {
    cy.fillUsername();
    cy.fillIncorrectPassword();
})

Then ("doesn't fill out username and password credentials", () => {
    cy.passwordFieldIsVisible();
    cy.usernameFieldIsVisible();
})

Then ("clicks Login", () => {
    cy.clickLoginButtom()
})

Then("validates that you are on Dashboard page", () =>{
    cy.verifyLoadHomePage()
})

Then("validates Invalid credentials message", () =>{
    cy.verifyInvalidCredentialsAlert()
})

Then("validates Required field message", () =>{
    cy.verifyAlertRequiredField()
})

Given ("logged with success", () => {
    cy.fillUsername();
    cy.fillPassword();
    cy.clickLoginButtom()
    cy.verifyLoadHomePage()
})