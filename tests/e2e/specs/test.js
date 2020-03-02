// https://docs.cypress.io/api/introduction/api.html

describe('Default Vue CLI page', () => {
  before(()=>{
    cy.visit('http://localhost:8080')
  })

  it('Has Vue.js in page title', () => {
    cy.get("[data-test-id='page-title']")
      .should("exist")
      .contains("Vue.js")
  })

  it('Has cli plugins section title containing word Plugins',()=>{
    cy.get("[data-test-id='cli-plugins-title']")
      .should("exist")
      .contains("Plugins")
  })

  it('Has essential links section title containing word Links',()=>{
    cy.get("[data-test-id='essential-links-title']")
      .should("exist")
      .contains("Links")
  })

  it('Has ecosystem section title containing word Ecosystem',()=>{
    cy.get("[data-test-id='ecosystem-title']")
      .should("exist")
      .contains("Ecosystem")
  })
})
