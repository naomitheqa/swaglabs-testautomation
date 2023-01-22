Feature: Login

Scenario: Standard_user successful login
    Given I enter standard_user as the user name 
    And I enter the correct password
    When I click login
    Then I should be logged in
