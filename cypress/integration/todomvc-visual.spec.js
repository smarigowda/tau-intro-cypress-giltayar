/// <reference types="cypress" />

import TodoPage from "../page-objects/todopage";

let todoPage;

describe("Visual Spec", function () {
  before("open the app", function () {
    cy.visit("http://todomvc-app-for-testing.surge.sh");
    cy.eyesOpen({ appName: "Cypress Course", batchName: "Cypress Course" });
    todoPage = new TodoPage();
  });
  after("After block", function () {
    cy.eyesClose();
  });
  it("Should do the visual checking", function () {
    todoPage.addToDo("Hello welcome to Cypress");
    cy.eyesCheckWindow("One to do added");
  });
});
