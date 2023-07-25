class Calculator {


    // constructor() {
    //     this.url = "https://automationtesting.co.uk"
   
    //   }

    //   visit() {
    //     cy.visit(this.url)
    //   }
    //numbers
    numberOne (){
       return cy.get('input[value="1"]');
    }
    numberTwo (){
        return cy.get('input[value="2"]');
     }
     numberThree (){
        return cy.get('input[value="3"]');
     }
     numberFour (){
        return cy.get('input[value="4"]');
     }
     numberFive (){
        return cy.get('input[value="5"]');
     }
     numberSix (){
        return cy.get('input[value="6"]');
     }
    numberSeven (){
       return cy.get('input[value="7"]');
    }
        numberEight (){
       return cy.get('input[value="8"]');
    }
    numberNine (){
        return cy.get('input[value="9"]');
     }
     numberZero (){
        return cy.get('input[value="0"]');
     }
     //others
     plusButton (){
        return cy.get('input[value="+"]');
     }
     minusButton (){
        return cy.get('input[value="-"]');
     }

     multiplicationButton (){
        return cy.get('input[value="*"]');
     }

     sharingButton (){
        return cy.get('input[value="/"]');
     }

     equallyButton (){
        return cy.get('input[value="="]');
     }

     restartButton (){
        return cy.get('input[value="c"]');
     }

     commaButton (){
        return cy.get('input[value="."]');
     }
}
export default Calculator;

