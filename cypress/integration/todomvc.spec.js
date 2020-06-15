/// <reference types="cypress" />

it("Should be able to add a new To Do to the list", function () {
  cy.visit("http://todomvc-app-for-testing.surge.sh");
  cy.get(".new-todo", { timeout: 6000 }).type("Learn Cypress").type("{enter}");
  cy.get('label').should('have.text', 'Learn Cypress');
  cy.get('input.toggle').should('not.be.checked');
  cy.get("input.toggle").click();
  cy.get('label').should('have.css', 'text-decoration-line', 'line-through');
  cy.contains('Clear completed').click();
  cy.get('ul.todo-list').should('not.have.descendants', 'li');
});
