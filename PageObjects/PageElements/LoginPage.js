class LoginPage{

    loginField(){
        return cy.get("input[class='form-control']");
      }

      passwordField(){
        return cy.get("input[title='At least 5 characters long']");
      }

      signInButton(){
        return cy.get("#submit-login");
      }

      signOutButton(){
        return cy.get(".hidden-sm-down.logout");
      }
    //Check login
      alertMessage(){
        return cy.get(".alert.alert-danger");
        
      }

}

export default LoginPage;