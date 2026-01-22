Feature: Candidate Manager
    Background: access the page with login info
        Given the user acesses Orange HRM loginpage
        And logged with success
        And clicks on Recruitment tab in sidemenuPage


    Scenario: Create Candidate with success
        When clicks on Add button to add a new candidate
        Then fills out all required fields
        And clicks save
        Then validates that the user was successfully created

    Scenario: Edit candidate info with success
        When types candidate name
        Then open the candidate's profile
        And clicks on edit information
        Then changes information
        Then clicks save to validate changes