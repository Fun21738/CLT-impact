class ContactFormPage {
    visit() {
      cy.visit('/contact');
    }
  
    get firstNameInput() {
      return cy.get('#wpforms-5113-field_0')   //firstname
    }
  
    get lastNameInput() {
      return cy.get('#wpforms-5113-field_0-last')    //lastname
    }
  
    get emailInput() {
      return cy.get('#wpforms-5113-field_1')   //email
    }
  
    get messageInput() {
      return cy.get('#wpforms-5113-field_2')     // message
    }
  
    get submitButton() {
      return cy.get('button[type="submit"]');     //submit button
    }
  
    submitForm(firstName, lastName, email, message) {
      this.firstNameInput.type(firstName);
      this.lastNameInput.type(lastName);
      this.emailInput.type(email);
      this.messageInput.type(message);
      this.submitButton.click();
    }
  
    assertAllInputsAreValid() {
      this.firstNameInput.should('have.attr', 'required');
      this.lastNameInput.should('have.attr', 'required');
      this.emailInput.should('have.attr', 'required');
      this.emailInput.should('have.attr', 'type', 'email');
      this.messageInput.should('have.attr', 'required');
    }
  }
  
  export default ContactFormPage;
  