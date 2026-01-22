Feature: Login
    Background: acess Orange HRM
    Given the user acesses Orange HRM loginpage

Scenario: Simple Login with success
    When fills out username and password credentials
    And clicks Login
    Then validates that you are on Dashboard page


Scenario: Simple Login attempt with username error
    When fills out incorrect username and password credentials
    And clicks Login
    Then validates Invalid credentials message

Scenario: Simple Login attempt with password error
    When fills out username and incorrect password credentials
    And clicks Login
    Then validates Invalid credentials message


Scenario: Simple Login attempt with blank information
    When doesn't fill out username and password credentials
    And clicks Login
    Then validates Required field message

