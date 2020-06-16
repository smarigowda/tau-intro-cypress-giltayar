describe("filtering spec", function () {
  beforeEach("setup for each test", function () {
    cy.visit("http://todomvc-app-for-testing.surge.sh");
    cy.get(".new-todo").type("Learn Cypress").type("{enter}");
    cy.get(".new-todo").type("Clean Room{enter}");
    cy.get(".new-todo").type("Document lerning{enter}");
    cy.get(".todo-list li:nth-child(2) .toggle").click();
  });
  it('Should correctly filter "Active" to dos', function () {
    cy.contains("Active").click();
    cy.get(".todo-list li").should("have.length", 2);
  });
  it('Should correctly filter "Completed"', function () {
    cy.contains("Completed").click();
    cy.get(".todo-list li").should("have.length", 1);
  });
  it('Should correctly filter "All"', function () {
    cy.contains("All").click();
    cy.get(".todo-list li").should("have.length", 3);
  });
});
