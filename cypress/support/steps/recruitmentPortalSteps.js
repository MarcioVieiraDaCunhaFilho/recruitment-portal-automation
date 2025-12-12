import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor"
import loginPageElements from "../elements/loginPageElements"
const LoginPageElements = new loginPageElements
import recruitmentPageElements from "../elements/recruitmentPageElements"
const RecruitmentPageElements = new recruitmentPageElements

Given ("the user acesses Orange HRM loginpage", () => {
    cy.acessLoginPage();

})

Then ("fills out username and password credentials", () => {
    cy.fillUsername();
    cy.fillPassword();
})

Then ("clicks Login", () => {
    cy.clickLoginButtom()
})

Then("validates that you are on Dashboard page", () =>{
    cy.verifyLoadHomePage()
})

