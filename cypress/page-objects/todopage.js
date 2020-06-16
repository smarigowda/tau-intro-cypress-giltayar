export default class TodoPage {
  selector = {
    newToDo: ".new-todo",
  };

  todoIndex = 0;

  getToDo() {
    return cy.get(`.todo-list li:nth-child(${this.todoIndex + 1})`);
  }

  addToDo(description) {
    cy.get(this.selector.newToDo, { timeout: 6000 })
      .type(description)
      .type("{enter}");
    return this;
  }
  navigateTo(url) {
    cy.visit(url);
    return this;
  }
  setTodoIndexTo(todoIndex) {
    // this.todo = cy.get(`.todo-list li:nth-child(${todoIndex + 1})`);
    this.todoIndex = todoIndex;
    return this;
  }
  verifyText(todoText) {
    this.getToDo().should("have.text", todoText);
    return this;
  }
  shouldNotBeChecked() {
    this.getToDo().should("not.be.checked");
    return this;
  }
  toggle() {
    this.getToDo().find("input.toggle").click();
    return this;
  }
  shouldHaveLineThrough() {
    this.getToDo()
      .find("label")
      .should("have.css", "text-decoration-line", "line-through");
    return this;
  }
  clearCompleted() {
    cy.contains("Clear completed").click();
    return this;
  }
  verifyTodoItemsCount(count) {
    if (count === 0) {
      cy.get("ul.todo-list").should("not.have.descendants", "li");
    } else {
        cy.get("ul.todo-list li").should('have.length', count);
    }
    return this;
  }
  shouldNotHaveLineThrough() {
    this.getToDo()
      .get("label")
      .should("not.have.css", "text-decoration-line", "line-through");
    return this;
  }
}
