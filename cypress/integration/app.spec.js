/// <reference types="cypress" />

describe('regular user flow', () => {
  it('checks if user can visit a product details page by clicking a product div', () => {
    cy.visit('/')
    cy.contains('[role="presentation"]', 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops').should('be.visible').click()
  })
  it('checks if user can add a product to the cart', () => {
    cy.get('div.product-info-wrapper').should('be.visible')
    cy.contains('button', 'Add to cart').should('be.visible').click()
    cy.contains('[role="menu"]', '1').should('be.visible')
  })
  it('checks if user can visit cart page and manipulate a product amount', () => {
    cy.contains('[role="menu"]', '1').should('be.visible').click()
    cy.contains('[class="container-cart"]', 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops').should('be.visible')
    cy.contains('span.amount', '1x').should('be.visible')
    cy.contains('button', '+').should('be.visible').click(2)
    cy.contains('[role="menu"]', '2').should('be.visible')
    cy.contains('span.amount', '2x').should('be.visible')
    cy.contains('button', '-').should('be.visible').click(3)
    cy.contains('[role="menu"]', '1').should('be.visible')
    cy.contains('span.amount', '1x').should('be.visible')
  })
  it('checks if user can remove a product from cart', () => {
    cy.contains('button', 'Remove from cart').should('be.visible').click()
    cy.contains('Your cart is empty :(')
  })
  it('checks if user can add multiple products to the cart',()=>{
    cy.visit('/')
    cy.contains('[role="presentation"]', 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops').should('be.visible').click()
    cy.contains('button','Add to cart').click()
    cy.go('back')
    cy.contains('[role="presentation"]', 'Mens Casual Premium Slim Fit T-Shirts').should('be.visible').click()
    cy.contains('button','Add to cart').click()
    cy.go('back')
    cy.contains('[role="presentation"]', 'Mens Cotton Jacket').should('be.visible').click()
    cy.contains('button','Add to cart').click()
    cy.go('back')
    cy.contains('div.amount-counter','3').should('be.visible')
  })
  it('checks if user can visit cart page and manipulate multiple products amount',()=>{
    cy.contains('div.amount-counter','3').click()
    cy.get('#container-cart-1').children().contains('button','+').click()
    cy.contains('div.amount-counter','4').should('be.visible')
    cy.get('#container-cart-2').children().contains('button','+').click().click()
    cy.contains('div.amount-counter','6').should('be.visible')
    cy.get('#container-cart-3').children().contains('button','Remove from cart').click()
    cy.contains('div.amount-counter','5').should('be.visible')
    cy.get('#container-cart-2').children().contains('button','Remove from cart').click()
    cy.contains('div.amount-counter','2').should('be.visible')
    cy.get('#container-cart-1').children().contains('button','Remove from cart').click()
    cy.get('div.amount-counter').should('not.be.visible')
    cy.contains('Your cart is empty :(').should('be.visible')
  })
})