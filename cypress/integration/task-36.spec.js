/// <reference types="cypress"/>
describe("Validate Login Form", () => {
  beforeEach(() => {
    cy.visit("http://template3.booost.bg/");
  });

  it("Should have visible login form", () => {
    cy.get("[data-cy=login-form] > .form").should(
      "have.css",
      "visibility",
      "visible"
    );
  });

  it("Should have title - Account Login", () => {
    cy.get("[data-cy=login-form] > .form-box-title").should(
      "have.text",
      "Account Login"
    );
  });

  it("Should have two input fields", () => {
    cy.get("[data-cy=login-form] > .form input").should(
      "have.lengthOf.greaterThan",
      1
    );
  });
  it("Should have register button", () => {
    cy.get(".register-switch").should("exist");
  });
  it("Register button should be visible after click", () => {
    cy.get(".register-switch")
      .click()
      .should("have.css", "visibility", "visible");
  });
});
