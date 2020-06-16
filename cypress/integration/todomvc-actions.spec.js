/// <reference types="cypress" />

describe("to do actions", function () {
  beforeEach("setup for each test", function () {
    cy.visit("http://todomvc-app-for-testing.surge.sh");
    cy.get(".new-todo", { timeout: 6000 })
      .type("Learn Cypress")
      .type("{enter}");
  });
  it("Should add a new to do to the list", function () {
    cy.get("label").should("have.text", "Learn Cypress");
    cy.get("input.toggle").should("not.be.checked");
  });

  it("Should mark a to do as completed", function () {
    cy.get("input.toggle").click();
    cy.get("label").should("have.css", "text-decoration-line", "line-through");
  });

  it("Should clear completed to dos", function () {
    cy.get("input.toggle").click();
    cy.contains("Clear completed").click();
    cy.get("ul.todo-list").should("not.have.descendants", "li");
  });
});
