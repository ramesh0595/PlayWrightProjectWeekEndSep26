@register @E2E
Feature: To validate the registration functionallity of the facebook application

Background:
Given The user should be in login page

@regression
Scenario: Register-Invalid-To validate the registration functionallity

When The user has to click the create new account button
And The user has to fill the firstName,LastName and other details
And The user has to click the submit button
Then The user should be get successfully registered message

@retest @regression
Scenario: Register-Valid-To validate the registration functionallity

When The user has to click the create new account button
And The user has to fill the firstName,LastName and other details
And The user has to click the submit button
Then The user should be get successfully registered message
