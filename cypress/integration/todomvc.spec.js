/// <reference types="cypress" />

it("Should be able to add a new To Do to the list", function () {
  cy.visit("http://todomvc-app-for-testing.surge.sh");
  cy.get(".new-todo", { timeout: 6000 }).type("Learn Cypress").type("{enter}");
  cy.get("input.toggle").click();
  cy.contains('Clear completed').click();
});
