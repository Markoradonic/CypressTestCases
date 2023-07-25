class TestStore {
    constructor() {
        this.url = "http://teststore.automationtesting.co.uk/"
   
      }

      visit() {
        cy.visit(this.url)
      }

      signNavbarButton(){
        return cy.get('a[title="Log in to your customer account"] span[class="hidden-sm-down"]');
      }


}

export default TestStore;