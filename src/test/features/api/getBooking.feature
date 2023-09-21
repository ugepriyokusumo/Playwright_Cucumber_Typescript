Feature: User get booking ID

    Scenario: User get booking ID and return OK
      When user get request booking
      Then user should get ok response
      And user should get response "fisrtname" with value "Mark"
