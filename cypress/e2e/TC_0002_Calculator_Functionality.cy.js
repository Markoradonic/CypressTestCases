
import Calculator from "../../PageObjects/PageElements/Calculator.js";
import HomePage from "../../PageObjects/PageElements/HomePage.js";
const cal = new Calculator();
const home = new HomePage();
describe("CalculatorFun", () => {
  it("passes", () => {
    cy.visit("/");
    cy.viewport(1920, 1080);
    home.calculatorFormNavMenu().click();

    cal.numberThree().click();
    cal.plusButton().click();
    cal.numberSix().click();
    cal.equallyButton().click();
  });
});
