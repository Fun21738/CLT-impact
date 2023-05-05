const logoImages=[
    'https://cltimpact.jitudevops.com/wp-content/uploads/2022/07/logo-investments-miles.png',
    'https://cltimpact.jitudevops.com/wp-content/uploads/2022/07/logo-investments-loyd.png',
    'https://cltimpact.jitudevops.com/wp-content/uploads/2022/07/logo-investments-luckyspot.png',
    'https://cltimpact.jitudevops.com/wp-content/uploads/2023/01/logo-investments-fitteds.png'
]


const texts=[
    'Growth investment in IT solutions services and consulting company, headquartered in Charlotte, NC',
    'Growth investment in a cutting edge video production and storytelling company, headquartered in Charlotte, NC',
    'Growth investment in barbershop chain with stores throughout the Southeast, headquartered in Charlotte, NC',
    'Growth investment in unique retailer of custom, bespoke hat and athletic wear, headquartered in Charlotte, NC'
]

describe('clt impact',()=>{
    beforeEach(()=>{
        cy.visit('https://cltimpact.jitudevops.com/investments/')
    })

    it('should find investment title ',()=>{
        cy.get('h1').contains('Investments')
    })
    
    it('should find investment paragraph',()=>{
        cy.get('.palette-0').contains('We’ve successfully invested in the next generation of Charlotte entrepreneurs.')
    })

    it('',()=>{
        logoImages.forEach((src)=>{
            cy.request(src).then((response)=>{
                expect(response.status).to.eq(200)
            })
        })
    })


    it('should find logo texts/paragraphs', () => {
        cy.get('.tatsu-fqoz0ynbwecwb5b3 > .tatsu-section-background-wrap > .tatsu-section-background')
      
        for (let i = 0; i < texts.length; i++) {
          const text = texts[i]
          it(`Test text ${i + 1}`, () => {
            cy.wrap(text)
              .should('be.a', 'string')
              .and('not.be.empty')
              .and('have.length.at.least', 10)
              .and('match', /[a-zA-Z]/)
              .and('not.match', /[<>]/)
              .and('not.match', /script/i)
          })
        }
      })
      
      
    // it.only(()=>{
    //     texts.forEach((text,index)={
    //         it(`Test text ${index +1}`,()=>{
    //             cy.wrap(text)
    //             .should('be.a','string')
    //             .and('not.be.empty')
    //             .and('have.length.at.least',10)
    //             .and('match',/[a-zA-Z]/)
    //             .and('not.match',/[<>]/)
    //             .and('not.match',/script/i)
    //         })

    //     })
    // })


})