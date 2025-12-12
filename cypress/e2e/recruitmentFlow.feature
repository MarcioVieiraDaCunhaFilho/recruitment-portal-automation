Feature: Recruiter
    Background: acess Orange HRM
    Given the user acesses Orange HRM loginpage

Scenario: Simple Login with success
    When fills out username and password credentials
    And clicks Login
    Then validates that you are on Dashboard page

Scenario: Create Candidate with success
    When logged with success
    And clicks on Recruitment tab on left navigation menu
    Then clicks on Add button to add a new candidate
    Then fills out all required fields
    And clicks save
    Then validates that the user was successfully created

    Scenario: Edit candidate info with success
    When logged with success
    And clicks on Recruitment tab on left navigation menu
    Then types candidate name
    Then open candidate profile
    And clicks on edit information
    Then changes information
    Then clicks save to validate changes