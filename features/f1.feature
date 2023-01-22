Feature: Login

Scenario: Successful Login
Given I enter a valid user name and password
And I click login
Then I should be logged in