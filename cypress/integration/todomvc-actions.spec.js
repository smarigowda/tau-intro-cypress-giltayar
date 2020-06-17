/// <reference types="cypress" />

import TodoPage from "../page-objects/todopage";

let todoPage = new TodoPage();

describe("to do actions", function () {
  beforeEach("setup for each test", function () {
    todoPage
      .navigateTo("http://todomvc-app-for-testing.surge.sh")
      .addToDo("Clean the house")
      .addToDo("Learn Cypress");
  });
  it("Should add a new to do to the list", function () {
    todoPage.setTodoIndexTo(0).verifyText("Learn Cypress").shouldNotBeChecked();
  });

  it("Should mark a to do as completed", function () {
    todoPage.setTodoIndexTo(0).toggle().shouldHaveLineThrough();
  });

  it("Should mark the to do as not completed", function () {
    todoPage
      .setTodoIndexTo(0)
      .toggle()
      .shouldHaveLineThrough()
      .toggle()
      .shouldNotHaveLineThrough();
  });

  it("Should clear completed to dos", function () {
    todoPage
      .setTodoIndexTo(0)
      .toggle()
      .clearCompleted()
      .verifyTodoItemsCount(1);
    todoPage
      .setTodoIndexTo(0)
      .toggle()
      .clearCompleted()
      .verifyTodoItemsCount(0);
  });
});
