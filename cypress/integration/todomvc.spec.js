/// <reference types="cypress" />

it("Should be able to add a new To Do to the list", function () {
  cy.visit("http://todomvc-app-for-testing.surge.sh?delay-new-todo=3000");
  cy.get(".new-todo").type("Learn Cypress").type("{enter}");
});
