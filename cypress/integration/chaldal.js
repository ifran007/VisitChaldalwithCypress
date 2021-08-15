describe('Chaldal Web Visit', () => {
	
    it('Sign in & Sign up', () => {
      cy.visit('https://chaldal.com/')
       cy.get('.signInBtn').click()
          cy.get('.actions > .loginBtn').click()	
  })
    
    it('Search', () => {
      cy.visit('https://chaldal.com/')
       cy.get('.searchInput > .searchBox').type('Dairy').click()
  })

    it('Search City', () => {
	    cy.visit('https://chaldal.com/')
       cy.get('.citySelectionLink > .area').click()
  })

	  it('Dashboard', () => {
	    cy.visit('https://chaldal.com/')
       cy.get('.hamburgerMenu > svg').click()
  })

	  it('Help & More', () => {
	    cy.visit('https://chaldal.com/')
       cy.get('.en').click()
  })

    it('Language Bangla or English', () => {
      cy.visit('https://chaldal.com/')
       cy.get('.localeSwitch').click()
       //cy.get('.selectedLocale').click()
  })

    it('Offer', () => {
      cy.visit('https://chaldal.com/')
       //cy.get('.menu > .misc-menu > .selected > .name > >a > Offers').click()
        cy.contains('Offers').click()
  })
  
    it('Food Aid', () => {
      cy.visit('https://chaldal.com/')
      cy.contains('Food Aid').click()
  })
  
    it('Popular', () => {
      cy.visit('https://chaldal.com/')
      cy.get('[data-cid="238"] > .name > a').click()
  })
  
    it('Hygine', () => {
      cy.visit('https://chaldal.com/')
      cy.get('[data-cid="1484"] > .name > a').click()
  })
  
    it('Flash Sales', () => {
      cy.visit('https://chaldal.com/')
      cy.get('[data-cid="1471"] > .name > a').click()
  })
  
    it('Baby Care', () => {
      cy.visit('https://chaldal.com/')
      cy.get('[data-cid="1471"] > .name > a').click()
  })
  
    it('Pet Care', () => {
      cy.visit('https://chaldal.com/')
      cy.get('[data-cid="229"] > .name > a').click()
  })
  
    it('Food Product', () => {
      cy.visit('https://chaldal.com/')
       cy.get('[data-cid="2"] > .name > a').click()
  })
  
    it('Home & Cleaning', () => {
      cy.visit('https://chaldal.com/')
       cy.get('[data-cid="81"] > .name > a').click()
  })
  
    it('Office Product', () => {
      cy.visit('https://chaldal.com/')
       cy.get('[data-cid="3"] > .name > a').click()
  })
  
    it('Beauty & Health', () => {
      cy.visit('https://chaldal.com/')
       cy.get('[data-cid="224"] > .name > a').click()
  })
  
    it('Home Appliances', () => {
      cy.visit('https://chaldal.com/')
      cy.get('[data-cid="1240"] > .name > a').click()
  })
  
    it('vehicle essential', () => {
      cy.visit('https://chaldal.com/')
      cy.get('[data-cid="1417"] > .name > a').click()
  })

//   it.only('Our Product Categories', () => {
// 	cy.visit('https://chaldal.com/')
// 	//cy.contains('Our Product Categories').click()
//     cy.get('#product-categories').click()
//  })


    it('Fruits and Vegetables', () => {
      cy.visit('https://chaldal.com/')
       cy.get('[href="fruits-vegetables"] > .categoryBox > .categoryName').click()
    
  })

    it('Meat and Fish', () => {
        cy.visit('https://chaldal.com/')
         cy.get('[href="meat-fish"] > .categoryBox > .categoryName').click()
  })

    it('Cooking', () => {
        cy.visit('https://chaldal.com/')
         cy.get('[href="cooking"] > .categoryBox > .categoryName').click()
  })

    it('Beverages', () => {
        cy.visit('https://chaldal.com/')
         cy.get('[href="beverages"] > .categoryBox > .categoryName').click()
  })

    it('Pest Control', () => {
        cy.visit('https://chaldal.com/')
        cy.get('[href="pest-control"] > .categoryBox > .categoryName').click()
    })

    it('How to order from Chaldal ?', () => {
	    cy.visit('https://chaldal.com/')
	     //cy.contains('How to order from Chaldal ?').click()
        cy.get('#how-to-order-chaldal').click()
  })

    it('Special Offers', () => {
    cy.visit('https://chaldal.com/')
     cy.get('#OfferSlider').click()
  })

    it('Why People love Chaldal', () => {
    cy.visit('https://chaldal.com/')
     cy.get('#love-chaldal').click()
  })

    it('What our clients are saying', () => {
    cy.visit('https://chaldal.com/')
     cy.get('#feedback').click()
  })

    it('Become a Corporate Customer', () => {
    cy.visit('https://chaldal.com/')
     cy.get('#corporate').click()
  })

    it('Location', () => {
    cy.visit('https://chaldal.com/')

  })

    it('Live Chat', () => {
    cy.visit('https://chaldal.com/')
     cy.get('.chat_launcher').click()
  })

  it.ony('VisitMeena_git ', () => {
    cy.visit('https://www.meenaclick.com/')
     cy.get('.actions-container > :nth-child(1) > .title-container').click()
     
  })


})