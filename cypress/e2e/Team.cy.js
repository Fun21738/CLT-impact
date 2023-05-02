const images =[
    'https://cltimpact.jitudevops.com/wp-content/uploads/2022/07/mug-circle-400-alston.jpg',
    'https://cltimpact.jitudevops.com/wp-content/uploads/2022/07/mug-circle-400-collins.jpg',
    'https://cltimpact.jitudevops.com/wp-content/uploads/2022/07/mug-circle-400-levinson.jpg',
    'https://cltimpact.jitudevops.com/wp-content/uploads/2022/07/mug-circle-400-mccoll.jpg',
    'https://cltimpact.jitudevops.com/wp-content/uploads/2020/09/mug-magan-circle-600.jpg',
    'https://cltimpact.jitudevops.com/wp-content/uploads/2022/07/mug-circle-400-sheffer.jpg',
    'https://cltimpact.jitudevops.com/wp-content/uploads/2022/07/mug-circle-400-whitner.jpg',
    'https://cltimpact.jitudevops.com/wp-content/uploads/2021/04/mug-circle-400-griner.jpg'
]

describe('clt impact',() => {
    beforeEach(() => {
        cy.visit('https://cltimpact.jitudevops.com/team/')
    });

    it('should find our teams page title', () => {
        cy.get('h1').contains('Our Team')
        cy.get('.palette-0').contains('Meet the founding team offering a unique approach to Charlotte investment')
    })

    it('should find title (founders)',()=>{
        cy.get('.tatsu-0vRvKy-jL > .tatsu-section-pad > .tatsu-row-one-col > .tatsu-row').contains('FOUNDERS')
    })

    // it('load founders images',()=>{
    //     images.forEach(image=>{
    //         cy.get(`img[src="${image.src}"][alt="${image.alt}"]`).should('exist');
    //         cy.contains('p', image.name).should('exist');
    //     })
    // })

    it.only('load founders images on the teams page',()=>{
        images.forEach((src)=>{
            cy.request(src).then((response)=>{
                expect(response.status).to.eq(200)
            })
        })
    })
    

    
})