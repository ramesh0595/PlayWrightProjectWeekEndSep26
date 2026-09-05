@login @E2E
Feature: To validate the login functionallity of the facebook application

Background:
Given The user should be in login page

@smoke @regression
Scenario: Login-Invalid-To validate the login functionallity with Invalid Credentials

When The user has to fill the username "ramesh@gmail.com" and password "431456271"
And The user has to click the login button
Then The user should be navigate the Invalid login page

@sanity @regression
Scenario: Login-Valid-To validate the login functionallity with Invalid Credentials

When The user has to fill the username "kumar@gmail.com" and password "534156232"
And The user has to click the login button
Then The user should be navigate the Invalid login page


