const images =[
    {src:'https://cltimpact.jitudevops.com/wp-content/uploads/2022/07/mug-circle-400-alston.jpg',name:'Will Alston',alt:'Founder'},
    {src:'https://cltimpact.jitudevops.com/wp-content/uploads/2022/07/mug-circle-400-collins.jpg',name:'Todd Collins',alt:'Founder'},
    {src:'https://cltimpact.jitudevops.com/wp-content/uploads/2022/07/mug-circle-400-levinson.jpg',name:'Hal Levinson',alt:'Founder'},
    {src:'https://cltimpact.jitudevops.com/wp-content/uploads/2022/07/mug-circle-400-mccoll.jpg',name:'Hugh McColl',alt:'Founder'},
    {src:'https://cltimpact.jitudevops.com/wp-content/uploads/2020/09/mug-magan-circle-600.jpg',name:'Matt Magan',alt:'Founder'},
    {src:'https://cltimpact.jitudevops.com/wp-content/uploads/2022/07/mug-circle-400-sheffer.jpg',name:'David Sheffer',alt:'Founder'},
    {src:'https://cltimpact.jitudevops.com/wp-content/uploads/2022/07/mug-circle-400-whitner.jpg',name:'James Whitner',alt:'Founder'}
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

    it.only('load founders images',()=>{
        images.forEach(image=>{
            cy.get(`img[src="${image.src}"][alt="${image.alt}"]`).should('exist');
            cy.contains('p', image.name).should('exist');
        })
    })
    
})