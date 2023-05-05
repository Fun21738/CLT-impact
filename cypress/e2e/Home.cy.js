describe('clt impact', () => {
    beforeEach(() => {
        cy.visit('https://cltimpact.jitudevops.com/')
    })

    it('should load landing page ', () => {
        cy.get('h1').contains('CLT Impact Investors is a non-profit investment firm focused on executing growth investments in order to empower the next generation of minority entrepreneurs in the greater Charlotte, NC area')
            .should('have.css', 'font-size', '50px', 'line-height', '60px', 'color', 'rgba(255,255,255,1)', 'text-align', 'center');
    })

    it('should load background image', () => {
        cy.get('.tatsu-bg-video')
        cy.request('https://youtu.be/YJEv2AMxTFc').then((response) => {
            expect(response.status).to.equal(200)
        })
    })

    it("should find and click button (who we are)", () => {
        cy.get("#ui-id-1")
            .should("not.have.class", "ui-state-active")
            .click().should("have.class", "ui-state-active")
    })

    it('should find text after clicking button (who we are)', () => {
        cy.get("#ui-id-1").contains("WHO WE ARE")
        cy.contains("We are a group of Charlotte, NC investors focused on investing in high performing businesses through a non-profit investment structure.")

    })

    it('should find and click button (where we invest)', () => {
        cy.get('#ui-id-3')
            .should('not.have.class', 'ui-state-active')
            .click().should('have.class', 'ui-state-active')
    })

    it('should find text after clicking button (where we invest)', () => {
        cy.get('#ui-id-3').contains('WHERE WE INVEST')
        cy.contains('We invest through debt or equity securities in Charlotte area minority owned businesses.')
    })

    it('should find and click button(why we_are diffrent) ', () => {
        cy.get('#ui-id-5')
            .should('not.have.class', 'ui-state-active')
            .click().should('have.class', 'ui-state-active')
    })

    it.only('should find a text after clicking button (why we_are diffrent)', () => {
        cy.get('#ui-id-5').then(($elems) => {
            const actualValues = $elems.toArray().map((elem) => Cypress.$(elem).text());
            const expectedValue = ["WHY WE'RE DIFFERENT"];
            expect(actualValues).to.deep.equal(expectedValue);
        })
        cy.contains('We invest through a non-profit investment structure, whereby 100% of returned principal and investment gains are re-invested in future minority entrepreneurs.')
    })
    







})