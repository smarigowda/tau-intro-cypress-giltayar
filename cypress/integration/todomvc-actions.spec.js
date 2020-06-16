/// <reference types="cypress" />

import TodoPage from "../page-objects/todopage";

let todo = new TodoPage();

describe("to do actions", function () {
  beforeEach("setup for each test", function () {
    todo
      .navigateTo("http://todomvc-app-for-testing.surge.sh")
      .addToDo("Clean the house")
      .addToDo("Learn Cypress");
  });
  it("Should add a new to do to the list", function () {
    todo.setTodoIndexTo(0).verifyText("Learn Cypress").shouldNotBeChecked();
  });

  it("Should mark a to do as completed", function () {
    todo.setTodoIndexTo(0).toggle().shouldHaveLineThrough();
  });

  it("Should mark the to do as not completed", function () {
    todo
      .setTodoIndexTo(0)
      .toggle()
      .shouldHaveLineThrough()
      .toggle()
      .shouldNotHaveLineThrough();
  });

  it("Should clear completed to dos", function () {
    todo.setTodoIndexTo(0).toggle().clearCompleted().verifyTodoItemsCount(1);
    todo.setTodoIndexTo(0).toggle().clearCompleted().verifyTodoItemsCount(0);
  });
});
