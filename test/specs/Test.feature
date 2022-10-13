Feature: Test feature


  Scenario Outline: Regex example
    Given I have a "<fruit>" with a "<value>"
    When I enter the "<number>" of fruit sold
    Then I should get total amount of sale

    Examples:
      | fruit   | value | number |
      | Aaple   | 200   | 30     |
      | Oranges | 400   | 50     |


