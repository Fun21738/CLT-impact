import { links } from "../utilis/data";

describe('CLT Impact', () => {
  beforeEach(()=>{
    cy.visit('https://cltimpact.jitudevops.com/')
  })

   describe('Testing logo route', () => {
    it('should load the CLT Impact logo on navbar and click it', () => {
      cy.visit('https://cltimpact.jitudevops.com')
      cy.get('img.light-scheme-logo').click()
        .should('have.attr', 'src', 'https://cltimpact.jitudevops.com/wp-content/uploads/2022/07/logo-clt-impact-fpo.png')
      cy.url()
        .should('eq', 'https://cltimpact.jitudevops.com/')
    })
  })

  it('find navbar links and click them',()=>{
    cy.visit('https://cltimpact.jitudevops.com')
    cy.get('#header')
      .find('a')
      .should('have.length',7)
      .each(($link)=>{
        cy.wrap($link).should('have.attr','href').should('not.be.empty')
        cy.wrap($link).click()
        cy.get('#header').should('be.visible') // Interact with element on new page
      })
  })




  it.only("test", ()=>{
    cy.get("#header-wrap")
    links.forEach((link)=>{
      cy.request(`https://cltimpact.jitudevops.com/${link}`).then((res)=>{
        expect(res.status).to.eq(200)
      })
    })
  })
  




})