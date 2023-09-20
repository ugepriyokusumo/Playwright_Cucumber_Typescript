Feature: User Successfully Submit Form


    Background: 
      Given user go to application web
      And user click on the completed web form link

    Scenario: Successfully Submit Form with Correct Data
      When user fill first name with "Uge"
      And user fill last name with "Priyokusumo"
      And user fill job title with "QA Engineer"
      And user click level education
      And user click male gender
      And user click submit button
      Then user verify The form was successfully submitted