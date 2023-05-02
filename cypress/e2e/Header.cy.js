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


  it("find navbar links and click them", ()=>{
    cy.get("#header-wrap")
    links.forEach((link)=>{
      cy.request(`https://cltimpact.jitudevops.com/${link}`).then((res)=>{
        expect(res.status).to.eq(200)
      })
    })
  })
  




})