import ContactFormPage from '../../contactFormPage';
import { contact, updateArray } from "../utilis/data";

let newData;

describe('clt impact', () => {
    const contactFormPage = new ContactFormPage();
    beforeEach(() => {
        cy.visit('https://cltimpact.jitudevops.com/contact/')
    });

    it('should find contact title and text',() => {
        cy.get('h1').contains('Contact')
        cy.get('h4').should('have.text','Introduce an investment opportunity or learn more about our investment efforts from our team.')
    })


  it('validates all inputs', () => {
    contactFormPage.assertAllInputsAreValid();
  });

  it('submits the form', () => {
    const firstName = 'John';
    const lastName = 'Doe';
    const email = 'johndoe@example.com';
    const message = 'This is a test message.';

    contactFormPage.submitForm(firstName, lastName, email, message);

    cy.url().should('contain', '/thanks');

    cy.get('.confirmation-message')
      .should('contain', 'Thank you for contacting us');
  });

  it("fill in all the input fields on the contact form", ()=>{
    cy.get("#wpforms-form-5113")
    cy.contactForm(contact)
    cy.get(`[name="wpforms[submit]"]`).click()
    cy.get("#wpforms-confirmation-5113 p").should("have.text", "Thanks for contacting us! We will be in touch with you shortly.")
  })

  it("test", ()=>{
    cy.get("#wpforms-form-5113")
    newData = updateArray(contact, "#wpforms-5113-field_0", "")
    cy.contactForm(newData)
    cy.get(`[name="wpforms[submit]"]`).click()
    cy.get("#wpforms-5113-field_0-error").should("have.text", "This field is required.")
  })
  

  it("test", ()=>{
    cy.get("#wpforms-5113-field_0-last")
    newData = updateArray(contact, "#wpforms-5113-field_0", "")
    cy.contactForm(newData)
    cy.get(`[name="wpforms[submit]"]`).click()
    cy.get("#wpforms-5113-field_0-error").should("have.text", "This field is required.")
  })


  it.only("firstname", ()=>{
    cy.get("#wpforms-5113-field_1")
    newData = updateArray(contact, "#wpforms-5113-field_0", "")
    cy.contactForm(newData)
    cy.get(`[name="wpforms[submit]"]`).click()
    cy.get("#wpforms-5113-field_0-error").should("have.text", "This field is required.")
  })

  
  it("test", ()=>{
    cy.get("#wpforms-form-5113")
    newData = updateArray(contact, "#wpforms-5113-field_0-last", "")
    cy.contactForm(newData)
    cy.get(`[name="wpforms[submit]"]`).click()
    cy.get("#wpforms-5113-field_0-error").should("have.text", "This field is required.")
  })




})