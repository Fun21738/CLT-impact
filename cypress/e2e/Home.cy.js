describe('clt impact', () => {
    beforeEach(() => {
        cy.visit('https://cltimpact.jitudevops.com/')
    })

    it('should load landing page ', () => {
        cy.get('h1').contains('CLT Impact Investors is a non-profit investment firm focused on executing growth investments in order to empower the next generation of minority entrepreneurs in the greater Charlotte, NC area')
        .should('have.css', 'font-size', '50px', 'line-height', '60px', 'color', 'rgba(255,255,255,1)','text-align', 'center');
    })

    it('should load background image',()=>{
        cy.get('.tatsu-bg-video')
        cy.request('https://youtu.be/YJEv2AMxTFc').then((response)=>{
            expect(response.status).to.equal(200)
        })
    })

    it("test", ()=>{
        cy.get("#ui-id-1")
        .should("not.have.class", "ui-state-active")
        .click().should("have.class", "ui-state-active")
    })
    
    it.only('test1', ()=>{
        cy.get("#ui-id-1").contains("WHO WE ARE")
        cy.contains("We are a group of Charlotte, NC investors focused on investing in high performing businesses through a non-profit investment structure.")
        
    })






})