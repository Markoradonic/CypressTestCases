import LoginPage from "../../PageObjects/PageElements/LoginPage.js";
import TestStore from "../../PageObjects/PageElements/TestStore.js";

const tsStore = new TestStore();
const loginP = new LoginPage();

describe("GoToTestStorePage", () => {
  it("HomePage", () => {
    cy.visit("");
    cy.viewport(1920, 1080);
    cy.scrollTo(0, 500);
    cy.get("li:nth-of-type(20) > a")
      .invoke("attr", "href")
      .should("eq", "http://teststore.automationtesting.co.uk/");
    cy.get("li:nth-of-type(20) > a").invoke("attr", "target", "_blank").click();
  });

  it("TestStorePage", () => {
    tsStore.visit();
    cy.viewport(1920, 1080);
    tsStore.signNavbarButton().click();
    //Check login functionality with VALID Username and Password
    loginP.loginField().type("test@test.com ");
    loginP.passwordField().type("test123");
    loginP.signInButton().click();
    loginP.signOutButton().click();
    // check login functionality with INVALID Username and Password
    loginP.loginField().type("test@tesdfs.com");
    loginP.passwordField().type("invalid!23");

    loginP.signInButton().click();
    loginP
      .alertMessage()
      .invoke("attr", "class")
      .should("eq", "alert alert-danger");

    cy.log(
      "Test pass. Person is not authenticated, A login credential is not valid"
    );
  });
});

// loginP.alertMessage().invoke("attr", "class").should("eq", "alert alert-danger");
